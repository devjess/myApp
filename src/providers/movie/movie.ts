import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private base_url = "https://api.themoviedb.org/3/";
  private api_key = "517351de88eab997d9178065577329b2";
  constructor(public http: HttpClient) {
  }

  getLatestMovies(){
    return this.http.get(this.base_url + "movie/popular?api_key=" + this.api_key);
  }
}
