import { Component, OnInit } from '@angular/core';
import { ClasesService } from './clases.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  clases: any[] = [];

  constructor(private claseService: ClasesService) { }

  ngOnInit(): void {
    this.claseService.getClases().subscribe(response => {
      console.log(response);
      this.clases = response;
    });
  }

}
