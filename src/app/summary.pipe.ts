import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name:"summary"
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit?:number){
        if(!value) return null;
        let actualLimit=(limit) ? limit : 100;
        if(actualLimit>value.length){
        return value.substring(0,actualLimit);}
        else{
        return value.substring(0,actualLimit)+'...';}
    }
}