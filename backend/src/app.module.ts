import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JourneyModule } from './journey/journey.module';

@Module({
  imports: [JourneyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}