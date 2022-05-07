import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'studentname',
  template: `
    <p>
      student works!
    </p>
  `,
  styles: [
  ]
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
