import { Component, OnInit } from '@angular/core';
import { CarrerasTecnicasService } from './carreras-tecnicas.service';
import { CarreraTecnica } from './carrera-tecnica';

@Component({
  selector: 'app-carreras-tecnicas',
  templateUrl: './carreras-tecnicas.component.html',
  styles: [
  ]
})
export class CarrerasTecnicasComponent implements OnInit {
  
  carreraTecnica: CarreraTecnica;
  carrerasTecnicas: any[] = [];

  constructor(private carreraService: CarrerasTecnicasService) {
    
   }

  ngOnInit(): void {
    this.carreraService.getCarrerasTecnicas().subscribe(response => {
      this.carrerasTecnicas = response;
    })
  }

}
