const fs = require('fs');
const http = require('http');
const path = require('path');

const buildDir = path.join(__dirname, 'build');
const port = process.env.PORT || 3000;

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.txt': 'text/plain; charset=utf-8',
};

function getStaticPath(urlPath) {
  const safePath = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, '');
  const requestedPath = path.join(buildDir, safePath);

  if (!requestedPath.startsWith(buildDir)) {
    return path.join(buildDir, 'index.html');
  }

  return requestedPath;
}

function sendFile(response, filePath) {
  const fallbackPath = path.join(buildDir, 'index.html');
  const resolvedPath = fs.existsSync(filePath) && fs.statSync(filePath).isFile() ? filePath : fallbackPath;
  const extension = path.extname(resolvedPath);

  response.writeHead(200, {
    'Content-Type': contentTypes[extension] || 'application/octet-stream',
  });

  fs.createReadStream(resolvedPath).pipe(response);
}

http
  .createServer((request, response) => {
    const requestUrl = new URL(request.url, `http://${request.headers.host}`);
    sendFile(response, getStaticPath(requestUrl.pathname));
  })
  .listen(port, () => {
    console.log(`Serving production build on port ${port}`);
  });
