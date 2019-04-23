#!/node

const glob = require('glob')
const fs = require('fs')
const path = require('path')
const {toLaxTitleCase} = require('titlecase')
const prettier = require('prettier')

const outputDir = `${__dirname}/output`

const generateMd = ({id, reviews, blurb}) => `---
templateKey: 'book-page'
bookId: ${id}
path: /books/${id}
title: ${toLaxTitleCase(id).replace(/-/g, ' ')}
reviews: ${reviews.reduce(
  (acc, {reviewer, text}) => `${acc}
  - reviewer: ${reviewer}
    text: >
      ${text}`,
  '',
)}
---

${blurb}
`

glob(
  './src/*.js',
  {
    ignore: [],
  },
  function(err, files) {
    files.forEach(filePath => {
      try {
        const file = fs.readFileSync(filePath, 'utf8')

        const id = path.basename(filePath, '.js')

        const blurb = file
          .match(/blurb={`([^`]*)/)
          .pop()
          .replace(/\s{2}/g, '')
          .replace(/<br \/>/g, '\n')
          .replace(/<p>/g, '')
          .replace(/<\/p>/g, '\n\n')

        const reviewTextRegex = /class="reviewtext">([^<]*)/g
        const reviewerRegex = /class="reviewref">([^<]*)/g
        let keepGettingReviews = true
        const reviews = []
        while (keepGettingReviews) {
          const textResult = reviewTextRegex.exec(file)
          const reviewerResult = reviewerRegex.exec(file)
          if (!textResult || !reviewerResult) keepGettingReviews = false
          else
            reviews.push({
              text: textResult[1].replace(/\s{2}/g, ''),
              reviewer: reviewerResult[1],
            })
        }

        const generatedMd = generateMd({id, blurb, reviews})

        prettier
          .resolveConfig('../.prettier.rc')
          .then(options => {
            const formatted = prettier.format(generatedMd, {
              ...options,
              parser: 'markdown',
            })
            fs.writeFileSync(outputDir + `/${id}.md`, formatted)
          })
          .catch(err => {
            console.log('prettier failed', err)
          })
      } catch (err) {
        console.log('Failed, likely regex, for', filePath)
        console.log(err)
      }
    })
  },
)
