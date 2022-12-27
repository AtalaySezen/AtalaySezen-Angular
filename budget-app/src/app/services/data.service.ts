import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  GetExpenses(): Observable<any> {
    return this.http.get<any>(environment.expenses);
  }
  
  GetIncomes(): Observable<any> {
    return this.http.get<any>(environment.incomes);
  }

  GetInvestments(): Observable<any> {
    return this.http.get<any>(environment.investments);
  }




}
