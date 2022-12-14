import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs"

@Injectable({
    providedIn:'root'
})

export class AppServiceService {

    constructor(private http: HttpClient){}


getAllPayments(): Observable<any>{
    return this.http.get('assets/json/payment.json');
}

}
