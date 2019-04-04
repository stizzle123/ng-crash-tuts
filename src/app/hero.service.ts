import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    setTimeout(() => {
      this.messageService.clear();
    }, 3500);
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: Send the message __after__ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    setTimeout(() => {
      this.messageService.clear();
    }, 3500);
    return of(HEROES.find(hero => hero.id === id));
  }
}
