import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'followPipe'
})
export class FollowPipePipe implements PipeTransform {

  transform(follow: number): string {
    let result: string = follow.toString();
    if(follow > 1000){
      result = follow/1000 + 'K';
    }
    return result;
  }

}
