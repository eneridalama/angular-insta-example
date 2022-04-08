import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  firstName: string = '';

  @Input()
  lastName: string = '';

  public birthday: string;

  constructor() {
    this.birthday = new Date('3/28/01').toDateString();
  }

  ngOnInit(): void {}
}
