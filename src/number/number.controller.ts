import { Controller, Get, Query } from '@nestjs/common';
import { NumberService } from './number.service';

@Controller('number')
export class NumberController {
  constructor(private readonly numberService: NumberService) {}

  @Get('getTheNumber')
  getTheNumber(
    @Query('first') first: number,
    @Query('second') second: number,
  ): string {
    return this.numberService.generateConcatenatedProduct(first, second);
  }
}
