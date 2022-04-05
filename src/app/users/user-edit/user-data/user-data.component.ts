import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent implements OnInit, OnDestroy {
  dropdownList: any;
  dropdownSettings: any;
  
  file: any;
  uploadOverview: any;
  dragging = false;
  eventsSubscription!: Subscription;
  selectOpened: boolean = false;
  @Input() events!: Observable<void>;
  @Output() formData = new EventEmitter();

  profileForm = new FormGroup({
    firstName: new FormControl('Hugh'),
    lastName: new FormControl('Jackman'),
    birthday: new FormControl(new Date('12/10/1968')),
    uploadImage: new FormControl(''),
    citizenship: new FormControl('citizenship'),
    instagram: new FormControl('@thehughjackman'),
    email: new FormControl('nothugh@example.com'),
    twitter: new FormControl('@RealHughJackman'),
    facebook: new FormControl('@HughJackman'),
  });

  constructor() {}

  ngOnInit(): void {
    // this.profileForm.valueChanges.subscribe(value => {
    //   console.log(value);
    // })
    this.eventsSubscription = this.events.subscribe(() => this.onSubmit());
  }

  onSubmit() {
    this.formData.emit({ form: this.profileForm.value, avatar: this.file });
  }

  clearFile() {
    this.file = '';
    this.uploadOverview = '';
  }

  getFile(e: any) {
    this.file = e;

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.uploadOverview = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  onDragEnter() {
    this.dragging = true;
  }

  onDragLeave() {
    this.dragging = false;
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  selectOptions: any[] = [{name: 'Australia', checked: false}, {name: 'New Zeland', checked: false}, {name: 'United Kingdom', checked: false}, {name: 'Switzerland', checked: false}];

  optionsAdded: any[] = [];

  openSelect() {
    this.selectOpened = !this.selectOpened;
  }

  removeOption(e: Event, optionName: any) {
    e.stopPropagation();
    let optionsAddedIndex = this.optionsAdded.indexOf(optionName);
    let selectOptionsIndex = this.selectOptions.map(response => {
      return response.name;
    }).indexOf(optionName);

    this.optionsAdded.splice(optionsAddedIndex, 1);

    if(this.selectOptions[selectOptionsIndex] != undefined) {
      this.selectOptions[selectOptionsIndex].checked = !this.selectOptions[selectOptionsIndex].checked;
    }
  }

  fieldsChange(event: any) {
    if(event.currentTarget.checked) {
      this.optionsAdded.push(event.currentTarget.value);
    } else {
      let optionsAddedIndex = this.optionsAdded.indexOf(event.currentTarget.value);
      this.optionsAdded.splice(optionsAddedIndex, 1);
    }
  }

}
