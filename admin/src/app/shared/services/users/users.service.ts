import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // URL
  public urlUser: string = environment.baseUrl + 'v1/users/'

  // Data
  public user: User
  public users: User[] = []
  public usersFiltered: User[] = []

  constructor(
    private http: HttpClient
  ) { }

  create(body: Form): Observable<User> {
    return this.http.post<any>(this.urlUser, body).pipe(
      tap((res) => {
        console.log('User: ', res)
      })
    )
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUser).pipe(
      tap((res) => {
        console.log('Users: ', res)
      })
    )
  }

  getOne(id: String): Observable<User> {
    let urlUserOne = this.urlUser + id + '/'
    return this.http.get<User>(urlUserOne).pipe(
      tap((res) => {
        console.log('User: ', res)
      })
    )
  }

  update(id: String, body: Form): Observable<User> {
    let urlUserOne = this.urlUser + id + '/'
    return this.http.put<User>(urlUserOne, body).pipe(
      tap((res) => {
        console.log('User', res)
      })
    )
  }

  filter(field: String): Observable<User[]> {
    let urlFilter = this.urlUser + '?' + field + '/'
    return this.http.get<User[]>(urlFilter).pipe(
      tap((res) => {
        console.log('Users', res)
      })
    )
  }

}
