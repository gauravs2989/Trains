import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyService {
    configUrl = "server";

    constructor(private http: HttpClient) {

    }

    getData() {
        return this.http.get(this.configUrl);
    }
}