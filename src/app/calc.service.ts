import { Injectable } from '@angular/core';
import { browser } from 'protractor';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(
    private shared: SharedService
    ) { }


    add(a:number,b:number):number{
      return a+b;
    }

    
  // add(a:any,b:number):any{
  //   return a+b;
  // }

  multiply(a:number,b:number):number{
    this.shared.randomize();
    return a*b;
  }
}
