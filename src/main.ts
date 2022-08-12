import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 5000;
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);

  Logger.log(
    `Graphql engine application started on http://localhost:${port}/graphql`,
  );
}
bootstrap();
