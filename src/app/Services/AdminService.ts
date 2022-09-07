import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
     providedIn : 'root'
})
export class AdminService{
    constructor(private http: HttpClient){

    }

    GetBooks() {
       let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTXVzdGFmYSIsIm5hbWVpZCI6IjEiLCJuYmYiOjE2NjI1NDgwNTYsImV4cCI6MTY2MjU0OTg1NiwiaWF0IjoxNjYyNTQ4MDU2fQ.L0pArJMMg7M_R33vzxMxdmkrXvSz4blfujyBcHbU3s0'
        var header = {
          headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
        };
        return this.http.get(
            'http://localhost:5285/api/Books',
          header
        );
      }
}