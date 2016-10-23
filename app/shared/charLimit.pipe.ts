// truncate.ts
import {Pipe} from '@angular/core'

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string) : string {
    let limit = value.length > 5 ? value.slice(0,5) : value;

    return limit;
  }
}