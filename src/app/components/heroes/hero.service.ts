import {Injectable} from '@angular/core';
import {Hero} from './heroes.interface';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/Observable/of';
import {MessageService} from './../messages/message.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService{
    constructor(private messageService:MessageService,private http:HttpClient){}
    getHero():Observable<Hero[]>{
    return this.http.get<Hero[]>("http://localhost:5000/api/heroes");
    }
    }

