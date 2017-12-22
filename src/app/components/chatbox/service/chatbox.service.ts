import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ChatService {
    private url: string;
    private socket: any;
    constructor(private http: HttpClient) {
        this.url = "http://localhost:5000";
        this.socket = io(this.url);
    }
    sendMessage(roomId:string,msgObj:any) {
        this.socket.emit('newMessage',roomId,msgObj);
    }
    joinUser(roomName: string, nickName: string) {
        this.socket.emit('join user',{room:roomName,name:nickName});
    }
    getMessages() {
        let observable = new Observable((observer: any) => {
            this.socket.on('addMessage', (data: any) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
    getUsers(){
    let observable=new Observable((observer:any)=>{
        this.socket.on('updateUsersList',(data:any)=>{
            observer.next(data);
        });
        return ()=>{
            this.socket.disconnect();
        };
    });
    return observable;
    }
    userIsTyping(username:string,room:string){
        this.socket.emit('user is typing',username,room);
    }
    userStoppedTyping(username:string,room:string){
        this.socket.emit('user stopped typing',username,room);
    }
    userTypingSignal(){
        let observable=new Observable((observer:any)=>{
            this.socket.on('user is typing',(data:any)=>{
                observer.next(data);
            });
            return ()=>{
                this.socket.disconnect();
            };
        });
        return observable;
    }
    userStoppedTypingSignal(){
        let observable=new Observable((observer:any)=>{
            this.socket.on('user stopped typing',()=>{
                observer.next();
            });
            return ()=>{
                this.socket.disconnect();
            };
        });
        return observable;
    }

}