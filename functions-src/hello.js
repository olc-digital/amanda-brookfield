import Twitter from 'twitter'

var client = new Twitter({
  consumer_key: 'FTahiC6wYhpH2iZWIaPWHcCzy',
  consumer_secret: 'tgtlyD3qlnSVAWjXecZvTa7Xa17Ep25flw91Uclx62Kdk2cQ6N',
  access_token_key: '108269911-iPyFYSU6aP3XqE9g4CYEWnJhSTNUKRb1LVENboiA',
  access_token_secret: 'yZYsxImwBv2YUkUZnJMzWCaXAruv3DqJ9CXoTfChSN6A3',
})

exports.handler = function(event, context, callback) {
  console.log('logging logging')
  console.log(event)
  console.log(context)
  // client.post('statuses/update', {status: 'I Love Twitterz'}, function(
  //   error,
  //   tweet,
  //   response
  // ) {
  //   if (error) throw error
  //   console.log(tweet) // Tweet body.
  //   console.log(response) // Raw response object.
  // })
  callback(null, {
    statusCode: 200,
    body: `Posted Successfully`,
  })
}
