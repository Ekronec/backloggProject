import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public mensaje = ""

  user = {
    user1: "",
    password: ""
  }

  mostarConsola(){
    console.log(this.user)

  }

}
