import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(
    private UserService: UserService
  ) { }

  ngOnInit() {
  }

  submitUser() {
    this.UserService.submitUser(this.form.getRawValue())
      .subscribe(
        (resp) => {
          console.log(resp);
        },
        (error) => {
          console.log(error);
        }
      )
  }
}
