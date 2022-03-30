import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http:HttpClient
  ) { }

  getFeature(){
    return this.http.get('http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=3566ca8da9813cdf6cc494900adeef8b&language=es&include_image_language=es');
  }
}
