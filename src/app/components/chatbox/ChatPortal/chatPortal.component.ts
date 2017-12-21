import { Component, OnInit } from "@angular/core";
import { ChatService } from "../service/chatbox.service";
import { ChatPortalService } from '../service/chatPortal.service';
import {Router} from '@angular/router';
import {MessageService} from './../../messages/message.service';

@Component({
    selector: "chat-portal",
    templateUrl: "./chatPortal.component.html",
    styleUrls: ["./chatPortal.component.css"]
})

export class ChatPortalComponent {
    nickName: string;
    roomsList: string[];
    accessRoomsList: Boolean;
    errorMsg: string;
    charMsg: string;
    constructor(private chatPortalService: ChatPortalService,private router:Router,private messageService:MessageService) {
        this.nickName = "";
        this.roomsList = [];
        this.accessRoomsList = false;
        this.charMsg = "";
    }

    createNickName(nickName: string) {
        if (nickName != "") {
            this.nickName = nickName;
            this.accessRoomsList = true;
            this.charMsg = "Hello " + this.nickName + ", Create your Own room or join existing rooms";
        }

    }
    createRoom(roomName: string) {
        //  this.roomsList.push(roomName);
        console.log("=====Rooms list=======");
        //console.log(this.roomsList);
        this.chatPortalService.createRoom(roomName);
    }
    accessRoom(roomName:string){
        console.log("===room name==="+roomName);
        this.router.navigate(['/chatroom',roomName,this.nickName]);
    }
    ngOnInit() {
        this.chatPortalService.getRooms().subscribe(rooms => {
            this.roomsList = rooms;
        });
        this.chatPortalService.AddNewRooms().subscribe(data => {
            console.log("inside new Rooms");
            console.log(data);
            if (data["error"]) {
                console.log("error occured");
                console.log(data["error"]);
                this.errorMsg = data["error"];
                this.messageService.add(data["error"]);
            }
            else {
                this.roomsList.push(data["title"]);
            }
        })
    }

}

