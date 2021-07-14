import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data: any = [];

  constructor(
    private UserService: UserService
  ) { }

  ngOnInit() {
    this.getListUser();
  }

  getListUser() {
    this.UserService.getUserList()
      .subscribe(
        (resp) => {
          this.data = resp;
        },
        (error) => {
          console.log(error);
        }
      )
  }
}
