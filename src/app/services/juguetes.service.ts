import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { data } from '../models/data.interface';
import { Juguete } from '../models/juguete.interface';

@Injectable({
  providedIn: 'root'
})
export class JuguetesService {

  headers = new HttpHeaders();
  //server = "https://backend.gegantoys.com";
  server = "https://backend.gegantoys.com";



  constructor(private http: HttpClient) { 

      this.headers.set('content-type','application/json').set('Access-Control-Allow-Origin','*');

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

    
    return this.http.get<data>( this.server +'/api/juguetes/',{ headers: this.headers }).pipe(map((data) => { return data.data }));
  }

  getJugueteById(identifier:number):Observable<Juguete> {
    return this.http.get<data>( this.server + 'api/juguete/' + identifier, { headers: this.headers }).pipe(map((data) => { return data.data }));
  }

  add(juguete:Juguete):Observable<Juguete>{
    return this.http.post<Juguete>(this.server + '/juguete/', juguete, { headers: this.headers });
  }

  update(juguete:Juguete):Observable<Juguete> {
    return this.http.put<Juguete>(`/juguete/${juguete.id}`, juguete , { headers: this.headers });
  }

  delete(idJuguete:number):Observable<boolean> {
    return this.http.delete<boolean>(`/juguete/${idJuguete}`, { headers: this.headers } );
  }




}
