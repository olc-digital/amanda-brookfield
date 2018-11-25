const fs = require('fs')
const moment = require('moment')
const parseString = require('xml2js')
const parser = new parseString.Parser()
const kebabCase = require('just-kebab-case')
const mdConverter = require('html-to-markdown')

const fileName = 'amandabrookfield.wordpress.2018-05-28.xml'
const data = fs.readFileSync(`${__dirname}/${fileName}`)

const generateFrontmatter = (title, body, date, description, tags) => `\
---
templateKey: blog-post
title: "${title}"
date: ${date.toISOString()}
description: ${description}
tags: ${tags.map(tag => `\n  - ${tag.$.nicename}`).join('')}
---

${body}
`

parser.parseString(data, function(err, result) {
  result.rss.channel[0].item.forEach(toMarkdown)
  console.log('Done')
})

function toMarkdown({
  'content:encoded': [body],
  'wp:post_date': [date],
  'wp:post_name': [kebabName],
  title: [title],
  description: [description],
  category: tags,
  'wp:status': [status],
}) {
  if (status !== 'publish') return
  const moDate = moment(date)
  const filename = `${moDate.format('YYYY-MM-DD')}-${kebabName ||
    kebabCase(title)}.md`
  const markdownBody = mdConverter.convert(body)
  const data = generateFrontmatter(
    title,
    markdownBody,
    moDate,
    description,
    tags,
  )
  fs.writeFileSync(`./posts/${filename}`, data)
}
