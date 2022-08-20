import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { data } from '../models/data.interface';
import { Juguete } from '../models/juguete.interface';

@Injectable({
  providedIn: 'root'
})
export class JuguetesService {

  server: string;
  headers:HttpHeaders;


  constructor(private http: HttpClient) { 

    //this.server =  "http://localhost:8000";
    this.server =  "https://gegantoys.com";
    this.headers = new HttpHeaders();
    this.headers.set('content-type', 'application/json');
    this.headers.set('Access-Control-Allow-Origin','*');

  }

  /*
  getAllJuguetes():Observable<Juguete[]> {
    return this.http.get<data>( '/juguetes/').pipe(map((data) => { return data.data }));
  }

  getJugueteById(identifier:number):Observable<Juguete> {
    return this.http.get<data>( '/juguete/' + identifier).pipe(map((data) => { return data.data }));
  }

  add(juguete:Juguete):Observable<Juguete>{
    return this.http.post<Juguete>('/juguete/', juguete);
  }

  update(juguete:Juguete):Observable<Juguete> {
    return this.http.put<Juguete>(`/juguete/${juguete.id}`, juguete);
  }

  delete(idJuguete:number):Observable<boolean> {
    return this.http.delete<boolean>(`/juguete/${idJuguete}`);
  }
*/


  getAllJuguetes():Observable<Juguete[]> {
    return this.http.get<data>( '/juguetes/').pipe(map((data) => { return data.data }));
  }

  getJugueteById(identifier:number):Observable<Juguete> {
    return this.http.get<data>( '/juguete/' + identifier).pipe(map((data) => { return data.data }));
  }

  add(juguete:Juguete):Observable<Juguete>{
    return this.http.post<Juguete>('/juguete/', juguete);
  }

  update(juguete:Juguete):Observable<Juguete> {
    return this.http.put<Juguete>(`/juguete/${juguete.id}`, juguete);
  }

  delete(idJuguete:number):Observable<boolean> {
    return this.http.delete<boolean>(`/juguete/${idJuguete}`);
  }




}
