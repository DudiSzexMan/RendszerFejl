import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";

  login() {
    if (this.username.trim() === "") {
      alert("Please enter a username.");
    } else {
      alert("Welcome, " + this.username + "!");
    }
  }
}

