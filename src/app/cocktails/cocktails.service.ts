import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  getCocktailFilter(filterData, callback, errCallback) {
    this.http.get("https://www.thecocktaildb.com/api/json/v1/1/" + filterData).subscribe(data => {
      callback(data);
    }, err => {
      errCallback(err);
    })
  }

}
