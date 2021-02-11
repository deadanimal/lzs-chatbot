import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class botsubcategoryService {
  
    // URL
    public botSubcategoryUrl: string = environment.baseUrl + 'api/botSubcategory/';

    // Data
    public requests: any[] = []
  
    constructor(private http: HttpClient) {}

    get(id:number,mode): Observable<any[]> {
      let tempUrl = this.botSubcategoryUrl + 'index?id='  + id + "&" + "mode=" + mode;
      return this.http.get<any[]>(tempUrl).pipe(
        tap((res) => {           
           
        })
      );    
    }

      
  update(body: any):Observable<any[]> {
    let tempUrl = this.botSubcategoryUrl + 'update'
    return this.http.post<any[]>(tempUrl,body).pipe(
      tap((res) => {           
         
      })
    );    
  }

  editMain(body: any):Observable<any[]> {
    let tempUrl = this.botSubcategoryUrl + 'editMain'
    return this.http.post<any[]>(tempUrl,body).pipe(
      tap((res) => {           
         
      })
    );    
  }

      delete(id : number):Observable<any[]> {
        let tempUrl = this.botSubcategoryUrl + 'delete'
        return this.http.post<any[]>(tempUrl,{'id': id}).pipe(
          tap((res) => {           
             
          })
        ); 
      }  

      deleteQ(id : number):Observable<any> {
        let tempUrl = this.botSubcategoryUrl + 'deleteQ'
        return this.http.post<any[]>(tempUrl,{'id': id}).pipe(
          tap((res) => {           
             
          })
        ); 
      } 
      
      deleteMain(id : number):Observable<any[]> {
        let tempUrl = this.botSubcategoryUrl + 'deleteMain'
        return this.http.post<any[]>(tempUrl,{'id': id}).pipe(
          tap((res) => {           
             
          })
        ); 
      }     
     
   create(body : any):Observable<any> {
        let tempUrl = this.botSubcategoryUrl + 'addSubCategory'
        //console.log(body);
        
        return this.http.post<any[]>(tempUrl,body).pipe(
          tap((res) => {           
             
          })
        ); 
      }

      addq(body : any):Observable<any> {
        let tempUrl = this.botSubcategoryUrl + 'addQ'

        return this.http.post<any[]>(tempUrl,body).pipe(
          tap((res) => {           
             
          })
        ); 
      }

      editq(body : any):Observable<any> {
        let tempUrl = this.botSubcategoryUrl + 'editQ'

        return this.http.post<any[]>(tempUrl,body).pipe(
          tap((res) => {           
             
          })
        ); 
      }
  
  }