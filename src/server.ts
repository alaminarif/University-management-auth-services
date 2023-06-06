import mongoose from 'mongoose';
import config from './config';
import app from './app';
import { Server } from 'http';
import { errorLogger, logger } from './share/logger';

//
process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

const bootstrap = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(`🛢   Database is connected successfully`);

    server = app.listen(config.port, () => {
      logger.info(`Application  listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('failed to database: ', error);
  }
  process.on('unhandledRejection', error => {
    errorLogger.error(error);
    if (server) {
      server.close(() => {
        errorLogger.error(error);
      });
    } else {
      process.exit(1);
    }
  });
};

bootstrap();

process.on('SIGABRT', () => {
  logger.info('SGTART IS RECEIVED');
  if (server) {
    server.close();
  }
});
