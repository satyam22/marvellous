//import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';
import {ChatComponent} from './components/chatbox/chat-component/chat.component';
import {ChatPortalComponent} from './components/chatbox/ChatPortal/chatPortal.component';


export const routes:Routes=[
    {path:'',component:HeroesComponent},
    {path: 'chatPortal',component:ChatPortalComponent},
    {path:'chatroom/:roomName/:nickName',component:ChatComponent}
];