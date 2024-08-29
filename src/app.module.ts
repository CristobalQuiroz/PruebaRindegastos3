import { Module } from '@nestjs/common';
import { NumberModule } from './number/number.module';

@Module({
  imports: [NumberModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
