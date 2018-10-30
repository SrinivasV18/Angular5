import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mobileplans } from './mobileplans';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PricePlanServiceService {

  baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

   findAllPlans():Observable<Mobileplans[]>{
    const plansUrl = `${this.baseUrl}pricePlans`;
        return this.http.get<Mobileplans[]>(plansUrl);
  }
}
