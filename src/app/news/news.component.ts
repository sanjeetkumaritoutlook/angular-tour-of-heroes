import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articles;
  
  constructor(private dataService: DataService) { } //inject the service as dataService via the component constructor.

  ngOnInit(): void {
	    console.log('testing');
    this.dataService.get().subscribe((data)=>{
      console.log("sanjeet"+data);
      this.articles = data['articles'];
    });

  }

}
