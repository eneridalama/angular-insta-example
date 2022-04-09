import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';

interface NameSurname {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  editField: boolean = false;
  editDateField: boolean = false;
  editBioField: boolean = false;

  editNameButton: string = 'Edit';
  editDateButton: string = 'Edit';
  editBioButton: string = 'Edit';

  isEditSelected: boolean = false;
  isEditDateSelected: boolean = false;
  isEditBioSelected: boolean = false;



  @Input('firstName') firstName: string = '';

  @Input('lastName') lastName: string = '';

  @Input('birthday') birthday: string;

  @Input('bio') bio: string = '';

  @ViewChild('firstNameRef') firstNameControl!: ElementRef<HTMLInputElement>;

  @ViewChild('lastNameRef') lastNameControl!: ElementRef<HTMLInputElement>;

  @ViewChild('birthdayRef') birthdayControl!: ElementRef<HTMLInputElement>;

  @ViewChild('bioRef') bioControl!: ElementRef<HTMLTextAreaElement>;

  @Output() addedItem: EventEmitter<NameSurname>;

  @Output() addedBirthday: EventEmitter<string>;

  @Output() addedBio: EventEmitter<string>;


  constructor() {
    this.birthday = new Date('').toDateString();

    this.addedItem = new EventEmitter<NameSurname>();
    this.addedBirthday = new EventEmitter<string>();
    this.addedBio = new EventEmitter<string>();
  }

  addBio(event: any){
    this.editBioField = !this.editBioField;
    this.isEditBioSelected = !this.isEditBioSelected;
    this.isEditBioSelected
      ? (this.editBioButton = 'Save')
      : (this.editBioButton = 'Edit');
    event.preventDefault();
    const bio = this.bioControl.nativeElement.value;

    if(bio) {
      this.bioControl.nativeElement.value = '';
      this.addedBio.emit(bio);
    }
  }

  addBirthday(event: any) {
    this.editDateField = !this.editDateField;
    this.isEditDateSelected = !this.isEditDateSelected;
    this.isEditDateSelected
      ? (this.editDateButton = 'Save')
      : (this.editDateButton = 'Edit');

    event.preventDefault();
    const birthday: string = this.birthdayControl.nativeElement.value;

    if (birthday) {
      
      this.birthdayControl.nativeElement.value = '';

      this.addedBirthday.emit(birthday);
    }
  }

  add(event: any) {
    this.editField = !this.editField;
    this.isEditSelected = !this.isEditSelected;
    this.isEditSelected
      ? (this.editNameButton = 'Save')
      : (this.editNameButton = 'Edit');

    event.preventDefault();
    const firstName: string = this.firstNameControl.nativeElement.value;
    const lastName: string = this.lastNameControl.nativeElement.value;

    if (firstName && lastName) {
      console.log(firstName, lastName);
      this.firstNameControl.nativeElement.value = '';
      this.lastNameControl.nativeElement.value = '';
      this.addedItem.emit({
        firstName: firstName,
        lastName: lastName,
      });
    }
  }

  ngOnInit(): void {}
}
