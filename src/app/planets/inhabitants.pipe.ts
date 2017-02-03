import { Pipe, PipeTransform } from '@angular/core';

const ONE_BILLION = 1000000000000;
const ONE_MILION = 1000000;
const ONE_THOUSAND = 1000;

@Pipe({
  name: 'inhabitants'
})
export class InhabitantsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result;

    if(+value >= ONE_BILLION){
      result = (value / ONE_BILLION).toLocaleString() + 'B';
    } else if (+value >= ONE_MILION) {
      result = (value / ONE_MILION).toLocaleString() + 'M';
    } else if (+value >= ONE_THOUSAND){
      result = (value / ONE_THOUSAND).toLocaleString() + 'K';
    } else if (+value >= 0){
      result = +value;
    } else {
      result = '???';
    }

    return `${result} habitantes`;
  }

}
