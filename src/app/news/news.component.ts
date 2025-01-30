import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles;
  news: any[] = [];
  constructor(private dataService: DataService) { } //inject the service as dataService via the component constructor.

  ngOnInit(): void {
    // this.dataService.get().subscribe((data)=>{
    //   console.log("sanjeet"+data);
    //   this.articles = data['articles'];
    // });

    //second service without any API key, directly from RSS feed
    this.dataService.getNews().subscribe(
      (articles) => this.news = articles,
      (error) => console.error('Error fetching news:', error)
    );

  }

  // ngOnInit(): void {
  //   this.http.get(this.apiUrl, { responseType: 'text' }).subscribe(
  //     (response) => {
  //       parseString(response, (err, result) => {
  //         if (!err) {
  //           this.news = result.rss.channel[0].item.map((item: any) => ({
  //             title: item.title[0],
  //             link: item.link[0],
  //           }));
  //         }
  //       });
  //     },
  //     (error) => {
  //       console.error('Error fetching news:', error);
  //     }
  //   );
  // }

}
