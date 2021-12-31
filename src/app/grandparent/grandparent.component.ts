import { Component, OnInit } from '@angular/core';
import { ClickService } from '../click.service';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css'],
})
export class GrandparentComponent implements OnInit {
  constructor(private clickService: ClickService) {
    this.clickService.awaitResponse();
  }

  ngOnInit(): void {}
}
