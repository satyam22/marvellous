import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes.interface';
import { HeroService } from './hero.service';
import {MessageService} from './../messages/message.service';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    comment: string;
    heroes: Hero[];
    result: string[] = [];
    title:string;
    constructor(private heroService: HeroService, private http: HttpClient,private messageService:MessageService) {
        this.title="Marvellous";
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    postComment() {
        if (this.selectedHero && this.comment.length != 0) {
            this.selectedHero.comments.push(this.comment);
            this.comment = "";
        }
    }
    ngOnInit() {
        this.getHeroes();
    }
    getHeroes(): void {
        this.heroService.getHero().subscribe(heroes => { this.heroes = heroes 
        this.messageService.add("Heroes fetched from api endpint");
        });
    }
}
