import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  endpoint: string = "http://localhost:5000"

  constructor(
    private http : HttpClient
  ) { }

  register(User: any){
    return this.http.post<any>(`${this.endpoint}/users`, User)
  }
}
