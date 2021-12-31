import { Component, OnInit } from '@angular/core';
import { ClickService } from '../click.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor(private clickService: ClickService) {
    this.clickService.onAnswer();
  }

  ngOnInit(): void {}

  onClick() {
    console.log('Button Clicked!');
    this.clickService.onClick();
  }
}
