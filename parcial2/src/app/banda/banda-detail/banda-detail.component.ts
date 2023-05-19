import {Component, Input, OnInit} from '@angular/core';
import {BandaDetail} from '../banda-detail';
import {ActivatedRoute} from "@angular/router";
import {BandaService} from "../banda.service";

@Component({
  selector: 'app-Banda-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.css']
})
export class BandaDetailComponent implements OnInit {
  id!: string;
  @Input() banda!: BandaDetail;

  constructor(private route: ActivatedRoute,
              private service: BandaService) {
  }

  ngOnInit(): void {
    if (this.banda === undefined) {
      this.id = this.route.snapshot.queryParamMap.get('id')!
      if (this.id) {
        this.service.getBanda(this.id);
      }
    }
  }
}
