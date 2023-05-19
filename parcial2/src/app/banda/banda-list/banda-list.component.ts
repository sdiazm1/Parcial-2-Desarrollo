import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  bandas: Array<Banda> = [];
  ages:  Array<number> = [];
  masAntiguaA: number =0;
  masAntiguaN: string="";
  constructor(private bandaService: BandaService) { }

  getBandas(): void {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;

      let age: number =0;
      let nombreBanda: string="";
      bandas.forEach(c => {
        if(age<c.foundation_Year)
        {
        age=c.foundation_Year;
        nombreBanda= c.name;
      }
      });
      this.masAntiguaA=2023-age;
      this.masAntiguaN+=nombreBanda;

    });
  }

  ngOnInit() {
    this.getBandas();
  }

}
