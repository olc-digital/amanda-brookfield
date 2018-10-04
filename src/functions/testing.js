import Twitter from 'twitter'
import dotenv from 'dotenv'
dotenv.config()

const {
  TWITTER_ACCESS_TOKEN_KEY,
  TWITTER_ACCESS_TOKEN_SECRET,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
} = process.env

var client = new Twitter({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
})

exports.handler = function(event, context, callback) {
  console.log('logging logging')
  try {
    console.log('>>> EVENT TYPE', event.body.state)
    console.log('>>> ENV', event.body.context)
    console.log('>>> TITLE', event.body.title)
  } catch (err) {
    console.log('failed to extract event details')
    console.log(err)
  }
  // console.log('>>> EVENT BODY', JSON.stringify(event.body))
  // delete event.body
  // console.log('>>> EVENT REST', JSON.stringify(event))
  // console.log('>>> CONTEXT', JSON.stringify(context))

  // conditions:
  // file must be called 'deploy-succeeded.js'
  // (must be a POST)
  // (must have valid jwt)
  // must pass validation
  // state = ready
  // context = production
  // title = "Create Blog "...

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
