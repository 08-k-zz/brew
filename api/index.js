const http = require('http');
const WebSocket = require('ws');

const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (socket) => {
  socket.on('message', (message) => {
    logger.info(`Message: ${message}`);
  });
});

server.listen(config.port, () => {
  logger.info(`Listening on port ${config.port}`);
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
