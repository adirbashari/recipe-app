import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-examples',
  templateUrl: './my-examples.component.html',
  styleUrls: ['./my-examples.component.css'],
})
export class MyExamplesComponent implements OnInit {
  flag = false;
  arrays = ['1', '2'];
  constructor() {}

  ngOnInit(): void {}
}
