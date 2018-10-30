import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from '../models/insurance-advisor';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {
baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

   findAllAdvisors():Observable<InsuranceAdvisor[]>{
    const advisorUrl = `${this.baseUrl}advisors`;
        return this.http.get<InsuranceAdvisor[]>(advisorUrl);
  }
}
