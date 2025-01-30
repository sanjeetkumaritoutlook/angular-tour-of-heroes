import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = '858d5604477640a7ad38ef51d2a3f23e';
  constructor(private httpClient: HttpClient) { }
  get(){
    //returns an RxJS Observable. 
	//to fetch data from the news API at NewsAPI.org 
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?apiKey=${this.apiKey}`);
     //return this.httpClient.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-06-24&sortBy=publishedAt&apiKey=${this.apiKey}`);
  }
}
