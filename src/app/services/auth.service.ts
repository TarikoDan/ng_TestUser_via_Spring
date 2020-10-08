import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
import {UserResp} from "../models/UserResp";
import {UserPassResp} from "../models/UserPassResp";

@Injectable({providedIn: 'root'})
export class AuthService {
  private baseUrl = "http://localhost:8081/users";

  constructor(private http: HttpClient) {
  }

  postReqData(value: User): Observable<User> {
    console.log(value);
    return this.http.post<User>(this.baseUrl, value);
  }

  getAllData():Observable<UserResp[]> {
    return this.http.get<UserResp[]>(this.baseUrl)
  }

  getByID(id: string):Observable<UserResp> {
    return this.http.get<UserResp>(this.baseUrl.concat("/",id)
      // ,{params: new HttpParams().set("id",id)}
      )
  }

  getByEmail(email: string) :Observable<UserPassResp> {
    return this.http.get<UserPassResp>(this.baseUrl.concat("/email"),
      {params: new HttpParams().set("email", email)}
      )
  }
}
