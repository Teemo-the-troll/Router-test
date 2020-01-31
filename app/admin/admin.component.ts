import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  title = 'admin-form';
  private container = document.getElementById("div");
  private username = '';
  private password = '';
  private login = false;
  private commands = '';
  private command = '';

  clickedButton(){
    if ((this.username === 'root') && (this.password === 'toor')) {
    this.login = true;
      
    } else 
      alert("This combination of password and username isn't in our database, check if your password and username are correct.")
    
  }

  postCommand(){
    this.commands += this.command + "\n";
  }


  constructor() { }

  ngOnInit() {
  }

}

