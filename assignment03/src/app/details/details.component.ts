import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }
  buttonClicked = 1;
  ngOnInit(): void {
  }

  onShowDetails(){
    if (this.buttonClicked === 1) {
      this.buttonClicked = 0;
    }
    else{
      this.buttonClicked = 1;
    }
  }
}
