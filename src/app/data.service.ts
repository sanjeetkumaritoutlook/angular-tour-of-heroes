import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { parseString } from 'xml2js'; //npm i xml2js; npm i timers
// xml2js depends on Node.js built-in modules like timers, 
// which are not available in Angular (browser environment).

//Solution: Use a Browser-Compatible XML Parser
//No third-party dependencies (Works natively in Angular)
@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = '858d5604477640a7ad38ef51d2a3f23e';
  news: any[] = [];
  //Use a Free CORS Proxy (Quick Fix)
  //private apiUrl = 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml';
  private apiUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://rss.nytimes.com/services/xml/rss/nyt/World.xml');

  constructor(private http: HttpClient) { }
  get(){
    //returns an RxJS Observable. 
	//to fetch data from the news API at NewsAPI.org 
    return this.http.get(`https://newsapi.org/v2/top-headlines?apiKey=${this.apiKey}`);
     //return this.httpClient.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-06-24&sortBy=publishedAt&apiKey=${this.apiKey}`);
  }
  getNews(): Observable<any[]>{
  // return this.http.get(this.apiUrl, { responseType: 'text' }).pipe(
  //   map(response => {
  //     let newsItems: any[] = [];
  //     parseString(response, (err, result) => {
  //       if (!err) {
  //         newsItems = result.rss.channel[0].item.map((item: any) => ({
  //           title: item.title[0],
  //           link: item.link[0],
  //         }));
  //       }
  //     });
  //     return newsItems;
  //   })
  // );

  //Since RSS feeds return XML, you need to parse it in your Angular app. 
    // Use HttpClient with responseType: 'text' and an XML parser
	//use an RSS feed and parse XML into JSON
  return this.http.get(this.apiUrl, { responseType: 'text' }).pipe(
    map(response => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response, 'text/xml');
      const items = xmlDoc.getElementsByTagName('item');

      let newsItems: any[] = [];
      for (let i = 0; i < items.length; i++) {
        newsItems.push({
          title: items[i].getElementsByTagName('title')[0].textContent,
          link: items[i].getElementsByTagName('link')[0].textContent
        });
      }
      return newsItems;
    })
  );


}
}
