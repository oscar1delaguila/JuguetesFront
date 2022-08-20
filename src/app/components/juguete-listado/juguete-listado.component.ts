import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Juguete } from 'src/app/models/juguete.interface';
import { JuguetesService } from 'src/app/services/juguetes.service';

@Component({
  selector: 'app-juguete-listado',
  templateUrl: './juguete-listado.component.html',
  styleUrls: ['./juguete-listado.component.scss']
})
export class JugueteListadoComponent implements OnInit {

  juguetes!:Juguete[];
  loaded:boolean = false;

  constructor( 
                private juguetesService: JuguetesService,
                private router:Router
             ) { }

  ngOnInit(): void {

    this.getListaJuguetes();

  }


  getListaJuguetes():void {

    this.juguetesService.getAllJuguetes().subscribe({

      next:(juguetes: Juguete[]) => {
        if (juguetes) {
          this.juguetes = juguetes;
          this.loaded = true;
          console.log(this.juguetes);
        }
      }
    });
  }


  crear():void {
    this.router.navigateByUrl('/juguete-form/');
  }


  editar(idJuguete:number):void {
    this.router.navigateByUrl('/juguete-form/' + idJuguete)    
  }

  eliminar(idJuguete:number):void {
    this.juguetesService.delete(idJuguete).subscribe({
      next:(response:boolean) => {
        if (response) {
          this.getListaJuguetes();
        }
      }
    });
  }


}
