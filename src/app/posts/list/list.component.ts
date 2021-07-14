import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  data: any = [];
  constructor(
    private PostService: PostService
  ) { }

  ngOnInit() {
    this.getListPosts();
  }

  getListPosts() {
    this.PostService.getPostList()
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
