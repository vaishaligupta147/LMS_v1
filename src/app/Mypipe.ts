import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
   name: 'mypipe'
})


export class Mypipe implements PipeTransform {
   transform(value: string): string {
      //transform(value: number): number {
      // return Math.sqrt(value);
      return value.split("_").pop();
   }

}
