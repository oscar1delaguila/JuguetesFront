

//import { Categorias } from "./categorias.interface";

import { Categoria } from "./categoria.interface";


export interface Juguete {

        id:number,
        nombre_juguete: string,
        fecha_publicacion: Date,
        descripcion: string,
        categorias: Categoria[],
        path_imagen: string
}
