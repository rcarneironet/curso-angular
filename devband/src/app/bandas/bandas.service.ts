import { Injectable } from '@angular/core'
import { Http, HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Banda } from "./banda/banda.model"
import { APP_API } from './../app.api';

@Injectable()
export class BandasService {
    constructor(private http: Http){}

    bandas(): Observable<Banda[]>{
        return this.http.get(`${APP_API}/bandas`)
            .map(response => response.json())
    }

}

