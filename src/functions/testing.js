import Twitter from 'twitter'
import dotenv from 'dotenv'
dotenv.config()

const {
  TWITTER_ACCESS_TOKEN_KEY,
  TWITTER_ACCESS_TOKEN_SECRET,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
} = process.env

const titlePrefixCondition = 'Create Blog '
const contextCondition = 'production'
const stateCondition = 'ready'
const urlPrefix = 'amandabrookfield.co.uk/blog'

const client = new Twitter({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
})

exports.handler = function(event, context, callback) {
  // conditions:
  // file must be called 'deploy-succeeded.js'
  // (must be a POST)
  // (must have valid jwt)
  // must pass validation
  // state = ready
  // context = production
  // title = "Create Blog "...
  try {
    const {state, context, title} = JSON.parse(event.body)
    console.log('>>> EVENT TYPE', state)
    console.log('>>> ENV', context)
    console.log('>>> TITLE', title)
    const slug = title.substring(title.indexOf('“') + 1, title.lastIndexOf('”'))
    const href = `${urlPrefix}/${slug}`
    console.log('href', href)
  } catch (err) {
    console.log('failed to extract event details')
    console.log(err)
  }
  //need to extract url of post:  x.substring(
  //   x.indexOf("“") + 1,
  //     x.lastIndexOf("”")
  // );

  //const slug = title.substring(title.indexOf('“') + 1, title.lastIndexOf('”'))

  // client.post(
  //   'statuses/update',
  //   {
  //     status: `I just wrote a new post on my blog, check it out here: amandabrookfield.co.uk/blog/${slug}`,
  //   },
  //   function(error, tweet, response) {
  //     if (error) return callback(error)
  //     console.log(tweet) // Tweet body.
  //     console.log(response) // Raw response object.

  //     callback(null, {
  //       statusCode: 200,
  //       body: `Posted Successfully`,
  //     })
  //   }
  // )

  callback(null, {
    statusCode: 200,
    body: `Posted Successfully`,
  })
}
