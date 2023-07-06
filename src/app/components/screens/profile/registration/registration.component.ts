import { Component, OnInit } from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  login: string;
  psw: string;
  pswRepeat: string;
  email: string;


  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  registration(ev: Event): void | boolean{
    if (this.psw!== this.pswRepeat){
      this.messageService.add({severity:'error', summary:'Пароли не совпадают'});
      return false;
    }
  }
}
