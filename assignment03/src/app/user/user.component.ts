import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allowNewUser = true;
  newUserStatus = 'Add new user';
  userName = "No Name Yet"
  constructor() {

  }

  ngOnInit(): void {
  }

  onCreateUser() {
   
    this.newUserStatus = 'New user created! Name: ' + this.userName;

    setTimeout(() => {
      this.newUserStatus = 'Add new user';
    }, 2000)
  }
  onUpdateUserName(event: any) {
    this.userName = event.target.value;
  }

  onResetUser() {
    this.newUserStatus = 'Username reset! Previous Name: ' + this.userName;
    this.userName = "No Name Yet";
   
    setTimeout(() => {
      this.newUserStatus = 'Add new user or reset an old one';
    }, 2000)
  }

}
