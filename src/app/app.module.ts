import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent }  from './app.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {MessageComponent} from './components/messages/messages.component'
import {ChatComponent} from './components/chatbox/chat-component/chat.component';
import {ChatPortalComponent} from './components/chatbox/ChatPortal/chatPortal.component';
import {HeroService} from './components/heroes/hero.service';
import {ChatService} from './components/chatbox/service/chatbox.service';
import {ChatPortalService} from './components/chatbox/service/chatPortal.service';
import {MessageService} from './components/messages/message.service';
import {RouterModule} from '@angular/router';
import {routes} from './app-routing.module';

@NgModule({
  imports:      [ HttpClientModule,BrowserModule,FormsModule,RouterModule.forRoot(routes)],
  declarations: [ AppComponent,HeroesComponent,MessageComponent,ChatComponent,ChatPortalComponent],
  bootstrap:    [ AppComponent ],
  providers:[HeroService,MessageService,ChatService,ChatPortalService]
})
export class AppModule { }
