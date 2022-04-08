import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ushtrim';

  followingName: string = 'Following';
  followersName: string = 'Followers';
  postsName: string = 'Posts';

  following: number = 1100;
  followers: number = 679;
  posts: number = 11; 

  inputFirstName: string = '';
  inputLastName: string = '';

  itemFirstName: string = '';
  itemLastName: string = '';

  fName: string = 'Enerida';
  lName: string = 'Lama';
  uName: string = 'eneridalama';

}
