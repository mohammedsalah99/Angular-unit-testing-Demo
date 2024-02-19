import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  randomize(): void {
    console.log('ramdomize is called');
  }

}
