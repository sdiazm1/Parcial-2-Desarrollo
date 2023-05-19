import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Banda } from './banda';
import {BandaDetail} from "./banda-detail";

@Injectable({
  providedIn: 'root'
})
export class BandaService {
  private apiUrl: string = environment.URL;

  constructor(private http: HttpClient) { }

  getBandas(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.apiUrl);
  }

  getBanda(id: string): Observable<BandaDetail> {
    return this.http.get<BandaDetail>(`${this.apiUrl}?id=${id}`);
  }


}
