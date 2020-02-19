const express = require('express')
const path = require('path-extra')
const url = require('url')
const pug = require('pug')

const app = express()
const port = 3000

if ( app.get('env') === 'development' ) {
  const browserSync = require('browser-sync')
  const connectBrowserSync = require('connect-browser-sync')

  const browserSyncConfigurations = {
  	files: ["./src/**/*"],
  	notify: false,
  	ghostMode: false
  };

  app.use(connectBrowserSync(browserSync(browserSyncConfigurations)))
}

app.use(express.static('./dist'))

app.get('*', (req, res, next) => {
  const reqPath = url.parse(req.url).pathname
  const reqExtname = path.extname(path.basename(reqPath))

  if (!reqPath.match(/(\/|\.html)$/)) {
      return next()
  }

  const srcPath = reqExtname === '.html' ? reqPath.replace(reqExtname, '.pug') : path.join(reqPath, 'index.pug')

  const htmlBuffer = pug.renderFile(path.join(`./src/html`, srcPath), {
      basedir: `./src/html`,
      pretty: true,
  })

  res.send(htmlBuffer.toString())

})


app.listen(port, () => console.log(`Web server listening on port ${port}!`))