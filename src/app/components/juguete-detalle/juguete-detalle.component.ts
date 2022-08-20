import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.interface';
import { Juguete } from 'src/app/models/juguete.interface';
import { JuguetesService } from 'src/app/services/juguetes.service';


@Component({
  selector: 'app-juguete-detail',
  templateUrl: './juguete-detalle.component.html',
  styleUrls: ['./juguete-detalle.component.scss']
})
export class JugueteDetalleComponent implements OnInit {

  juguete!: Juguete;
  showDetails:boolean = false;
  categoriasJuguete!:Categoria[]; 

  constructor(
      private activatedRoute:ActivatedRoute,
      private router:Router,
      private juguetesService: JuguetesService,
    
    ) { }

  ngOnInit(): void {

    const identifier:number = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id')||"");
    
    this.juguetesService.getJugueteById(identifier).subscribe({

      next:(juguete:Juguete) => {

        //PRINT
        console.log('Juguete: ', juguete );
        this.juguete = juguete;
        console.log('Categorias: ', this.juguete.categorias);
      },
      error:()=> {
        return this.router.navigateByUrl('/');
      }

    });
  }

  showAllDetails():void {

    this.showDetails = !this.showDetails;

  }


}
