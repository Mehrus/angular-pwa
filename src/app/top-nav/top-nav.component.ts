import { Component, OnInit } from '@angular/core';
import { UpdateUserDataService } from '../users/user-edit/update-user-data.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  avatar: any = 'assets/img/Avatar.png';

  constructor(
    private updateUserDataService: UpdateUserDataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.updateUserDataService.formData.subscribe((values) => {
      if (values.avatar) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.avatar = event.target.result;
        };
        reader.readAsDataURL(values.avatar.target.files[0]);
      }
    });
  }
}
