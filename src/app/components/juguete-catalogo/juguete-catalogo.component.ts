import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Juguete } from 'src/app/models/juguete.interface';
import { JuguetesService } from 'src/app/services/juguetes.service';

@Component({
  selector: 'app-juguete-catalogo',
  templateUrl: './juguete-catalogo.component.html',
  styleUrls: ['./juguete-catalogo.component.scss']
})
export class JugueteCatalogoComponent implements OnInit {

  juguetes!:Juguete[];
  loaded:boolean = false;

  constructor( private juguetesService: JuguetesService) { }

  ngOnInit(): void {

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

}
