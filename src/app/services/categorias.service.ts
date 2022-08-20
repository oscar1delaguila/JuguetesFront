import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Categoria } from '../models/categoria.interface';
import { data } from '../models/data.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) {}

  getAllCategorias():Observable<Categoria[]> {

    return this.http.get<data>( '/categorias/').pipe(map((data) => { return data.data }));

  }

  getAllCategoriasByJugueteId(identifier:string):Observable<Categoria> {

    return this.http.get<data>( '/categoria/' + identifier).pipe(map((data) => { return data.data }));

  }

}
