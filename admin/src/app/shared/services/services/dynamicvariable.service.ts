import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicvariableService {
  
    // URL
    public dynamicVariableUrl: string = environment.baseUrl + 'api/dynamicvariable/';

    // Data
    public requests: any[] = []
  
    constructor(private http: HttpClient) {}

    get(): Observable<any[]> {
      let tempUrl = this.dynamicVariableUrl + 'index'
      return this.http.get<any[]>(tempUrl).pipe(
        tap((res) => {           
           
        })
      );    
    }

      
  update(id : number,body: any):Observable<any[]> {
    let tempUrl = this.dynamicVariableUrl + 'update'
    return this.http.post<any[]>(tempUrl,{"name": body.value.name,"id":id,"value": body.value.value}).pipe(
      tap((res) => {           
         
      })
    );    
  }
      delete(id : number):Observable<any[]> {
        let tempUrl = this.dynamicVariableUrl + 'delete'
        return this.http.post<any[]>(tempUrl,{'id': id}).pipe(
          tap((res) => {           
             
          })
        ); 
      }      
     
   create(body : any):Observable<any[]> {
        let tempUrl = this.dynamicVariableUrl + 'create'
        //console.log(body);
        
        return this.http.post<any[]>(tempUrl,body.value).pipe(
          tap((res) => {           
             
          })
        ); 
      }
  
  }