const testFolder = `${__dirname}/originals/`
const fs = require('fs')

fs.readdirSync(testFolder).forEach(file => {
  fs.rename(
    `${testFolder}${file}`,
    `${testFolder}${file.toLowerCase().replace(/ /g, '-')}`,
    function(err) {
      if (err) console.log('ERROR: ' + err)
    },
  )
})
