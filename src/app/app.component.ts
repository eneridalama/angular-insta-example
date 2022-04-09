import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Insta Replica';

  colorMode: string = 'Light Mode'

  followingName: string = 'Following';
  followersName: string = 'Followers';
  postsName: string = 'Posts';

  birthdayDate: string = '';
  inputBirthdayDate = '';
  itemBirthdayDate: string = '1/01/01';

  following: number = 1100;
  followers: number = 679;
  posts: number = 11; 

  inputFirstName: string = '';
  inputLastName: string = '';

  itemFirstName: string = 'Default';
  itemLastName: string = 'Name';

  fName: string = '';
  lName: string = '';

  bioInput: string = '';
  bioItem: string = 'Bringing you closer to the people and things you love.❤';

  logUsername(event: any) {
    const { firstName, lastName } = event;

    this.inputFirstName = '';
    this.inputLastName = '';

    this.itemFirstName = firstName;
    this.itemLastName = lastName;
  }

  logBirthday(event: any){
    const birthday = event;
    this.inputBirthdayDate = '';
    this.itemBirthdayDate = birthday;
  }

  logBio(event:any){
    const bio = event;
    this.bioInput = '';
    this.bioItem = bio;
  }


}
