const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 8080;

const STATUS = {
  likes: 0,
};

const pong = (res) => {
  res.writeHead(200);
  res.write(JSON.stringify({ status: 'ok', message: 'pong' }));
};

const like = (res) => {
  STATUS.likes += 1;

  res.writeHead(200);
  res.write(JSON.stringify({ status: 'ok' }));
};

const dislike = (res) => {
  STATUS.likes -= 1;

  res.writeHead(200);
  res.write(JSON.stringify({ status: 'ok' }));
};

const showStats = (res) => {
  res.writeHead(200);
  res.write(JSON.stringify({ status: 'ok', likes: STATUS.likes }));
};

const showStartPage = (res) => {
  res.writeHead(200, { 'content-type': 'text/html' });

  const html = fs.readFileSync('./index.html');

  res.write(html);
};

const requestListener = function (req, res) {
  switch (req.url) {
    case '/ping':
      pong(res);
      break;

    case '/like':
      like(res);
      break;

    case '/dislike':
      dislike(res);
      break;

    case '/stats':
      showStats(res);
      break;

    case '/':
      showStartPage(res);
      break;

    default:
      res.writeHead(404);
      res.write(JSON.stringify({ status: 'error', message: 'Not found' }));
  }

  res.end();
};

const server = http.createServer(requestListener);
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
