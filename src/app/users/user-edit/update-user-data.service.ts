import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserDataService {
    public formData: Subject<any>;

    constructor() {
      this.formData = new Subject();
    }
  
    updateUserData(formValues: any) {
      this.formData.next(formValues);
    }
}
