import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from '../models/insurance-advisor';
import { PolicyDetail } from '../policy-detail';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {
  baseUrl = 'http://localhost:3000/';
  lifeInsuranceUrl = `${this.baseUrl}lifeInsurance`;
  headerContentType = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

  findAllAdvisors(): Observable<InsuranceAdvisor[]> {
    const advisorUrl = `${this.baseUrl}advisors`;
    return this.http.get<InsuranceAdvisor[]>(advisorUrl);
  }
  findPolicy(): Observable<PolicyDetail[]> {

    return this.http.get<PolicyDetail[]>(this.lifeInsuranceUrl);
  }

  addPolicy(policy: PolicyDetail): Observable<PolicyDetail> {
    return this.http.post<PolicyDetail>(this.lifeInsuranceUrl, policy, { headers: this.headerContentType });
  }

  updatePolicy(policy: PolicyDetail): Observable<PolicyDetail> {
    const updateURL = `${this.lifeInsuranceUrl}/${policy.id}`;
    return this.http.put<PolicyDetail>(updateURL, policy, { headers: this.headerContentType });
  }

  removePolicy(policy: PolicyDetail): Observable<PolicyDetail> {
    console.log(policy);
    const deleteUrl= `${this.lifeInsuranceUrl}/${policy.id}`;
    //this.http.request()
    return this.http.delete<PolicyDetail>(deleteUrl, { headers: this.headerContentType });
  }


}
