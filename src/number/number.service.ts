import { Injectable } from '@nestjs/common';

@Injectable()
export class NumberService {
  generateConcatenatedProduct(first: number, second: number): string {
    let result = '';
    for (let i = 1; i <= second; i++) {
      result += (first * i).toString();
    }
    return result.slice(0, 9); // Get only the first 9 digits
  }
}
