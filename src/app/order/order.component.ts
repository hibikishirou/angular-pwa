import { Component, OnInit } from '@angular/core';
import { MENU_LIST } from './common/const';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  menuList = MENU_LIST;
  constructor() { }

  ngOnInit() {
  }

}
