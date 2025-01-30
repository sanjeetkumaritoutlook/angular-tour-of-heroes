import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  // heroes = HEROES; //this is used in html from mockservice
  heroes: Hero[] = [];  //Replace the definition of the heroes property with a declaration.



  selectedHero?: Hero;    //Rename the component's hero property to selectedHero
                        // but don't assign it. 
                       /// There is no selected hero when the application starts., 
  
  /* Inject the HeroService,
   Add a private heroService parameter of type HeroService to the constructor. */
  // constructor(private heroService: HeroService) {}  //private
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes(); //synchronous call
  // }
  
  ngOnInit(): void {
    this.getHeroes();


  }
  onSelect(hero: Hero): void {  //this entire onselect will not be requied on routing from hero-detail
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`); //additional messages
  }


  getHeroes(): void {
    this.heroService.getHeroes()     
        .subscribe(heroes => this.heroes = heroes);    //asynchronous call
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
