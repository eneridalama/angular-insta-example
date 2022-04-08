import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-info',
  templateUrl: './follow-info.component.html',
  styleUrls: ['./follow-info.component.scss']
})
export class FollowInfoComponent {

  @Input()
  title: string = '';

  @Input()
  followNumbers: number = 0;

  constructor(){
  }

}
