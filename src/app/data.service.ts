import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllUsers(){
    return this.httpClient.get('api/users/');
  }

  getUserById(id: number){
    return this.httpClient.get(`api/users/${id}`);
  } 
}
