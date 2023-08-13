import { Module } from '@nestjs/common';
import { OutController } from './out.controller';
import { OutService } from './out.service';

@Module({
  imports: [],
  controllers: [OutController],
  providers: [OutService],
})
export class AppModule {}
