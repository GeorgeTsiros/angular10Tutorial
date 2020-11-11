import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }
  buttonClicked = true;
  clicksArray = [];
  ngOnInit(): void {
  }

  onShowDetails() {
    this.clicksArray.push(this.clicksArray.length + 1);
    this.buttonClicked = !this.buttonClicked;
  }
}
