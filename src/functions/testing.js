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
const tweetCopy = 'I just wrote a new post on my blog, check it out here:'

const client = new Twitter({
  consumer_key: TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_CONSUMER_SECRET,
  access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
})

exports.handler = async (event, context, callback) => {
  // file must be called 'deploy-succeeded.js'
  try {
    const {state, context, title} = JSON.parse(event.body)
    console.log('>>> EVENT TYPE', state)
    console.log('>>> ENV', context)
    console.log('>>> TITLE', title)
    if (
      state !== stateCondition ||
      context !== contextCondition ||
      !title.startsWith(titlePrefixCondition)
    ) {
      console.log('Non blogpost-ready call to function')
      return callback(null, {
        statusCode: 200,
        body: `Non blogpost-ready call complete`,
      })
    }
    const slug = title.substring(title.indexOf('“') + 1, title.lastIndexOf('”'))
    const href = `${urlPrefix}/${slug}`
    console.log('href', href)
    await client.post('statuses/update', {
      status: `${tweetCopy} ${href}`,
    })
    callback(null, {
      statusCode: 200,
      body: `Tweeted Successfully`,
    })
  } catch (err) {
    console.log(err)
    callback(err)
  }
}
