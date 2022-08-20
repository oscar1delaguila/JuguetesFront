import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.interface';
import { Juguete } from 'src/app/models/juguete.interface';
import { CategoriasService } from 'src/app/services/categorias.service';
import { JuguetesService } from 'src/app/services/juguetes.service';

@Component({
  selector: 'app-juguete-form',
  templateUrl: './juguete-form.component.html',
  styleUrls: ['./juguete-form.component.scss']
})
export class JugueteFormComponent implements OnInit {

  
  
  private isUpdateMode!: boolean;
  jugueteId!: number;
  loaded!: boolean;

  jugueteForm!: FormGroup;
  
  juguete!:Juguete;
  categoriasLista!: Categoria[];
  categorias!: FormControl;
  nombreJuguete!: FormControl;
  descripcion!: FormControl;
  fechaPublicacion!: FormControl;
  imagenFile!: FormControl;


  constructor(
      private activatedRoute: ActivatedRoute,
      private formBuilder: FormBuilder,
      private categoriasService: CategoriasService,
      private juguetesService: JuguetesService 
  ) { 

    this.jugueteId = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id')||"");
    
    ( this.jugueteId) ? this.isUpdateMode = true : this.isUpdateMode = false; 

    
    this.nombreJuguete = new FormControl('', [ Validators.required, Validators.maxLength(255) ]);
    this.descripcion = new FormControl ('', [ Validators.required, Validators.maxLength(1000) ]);
    this.fechaPublicacion = new FormControl(new Date(), Validators.required );
    this.categorias = new FormControl([]);
    this.imagenFile = new FormControl([ Validators.required, Validators.maxLength(255) ]);

    this.loadCategories();

    this.jugueteForm = this.formBuilder.group({
      nombreJuguete: this.nombreJuguete,
      descripcion: this.descripcion,
      fechaPublicacion: this.fechaPublicacion,
      categorias: this.categoriasLista,
      imagenFile: this.imagenFile

    });
  }


  ngOnInit(): void {
  

    if (this.isUpdateMode) {

      this.juguetesService.getJugueteById(this.jugueteId).subscribe({

        next:(juguete:Juguete) => {

          this.nombreJuguete.setValue(juguete.nombre_juguete);
          this.descripcion.setValue(juguete.descripcion);
          this.fechaPublicacion.setValue(formatDate(juguete.fecha_publicacion, 'yyyy-MM-dd' , 'en' ))
          
          let categoriasAux:number[] = [];
          juguete.categorias.forEach((aux:Categoria) => { categoriasAux.push(aux.id ) })
          this.categorias.setValue(categoriasAux);

          //PRINT
          console.log("categorias juguete: ", categoriasAux);

          //this.imagenFile.setValue(juguete.path_imagen);

          this.jugueteForm = this.formBuilder.group({
            nombreJuguete: this.nombreJuguete,
            descripcion: this.descripcion,
            fechaPublicacion: this.fechaPublicacion,
            categorias: this.categorias,
            imagenFile:this.imagenFile
          });
        }
      })
    }
  }


  private loadCategories(): void {
  
    this.categoriasService.getAllCategorias().subscribe({
      next:(response) => {
            if (response) {
              this.categoriasLista = response;
              //PRINT
              console.log('Todas categorias: ',this.categoriasLista);
            }
      }
    });
  }


  updateJuguete() {

    console.log("acualiza juguete");

  }


  creaJuguete(){

    console.log("crea juguete");

  }


  saveJuguete():void {
      
      this.juguete = this.jugueteForm.value;

      //PRINT
      console.log("Juguete desde formulario: ", this.juguete);
      
      if (this.isUpdateMode) {
        this.updateJuguete();
      } else {
        this.creaJuguete();
      }

  }

}
