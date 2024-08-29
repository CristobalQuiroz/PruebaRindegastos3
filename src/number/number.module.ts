import { Module } from '@nestjs/common';
import { NumberController } from './number.controller';
import { NumberService } from './number.service';

@Module({
  controllers: [NumberController],
  providers: [NumberService],
})
export class NumberModule {}
