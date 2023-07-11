import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPost, PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  constructor(private postService: PostService, private router: Router) {
    this.allPost$ = postService.fetchPost({});
  }
  allPost$;

  viewPost(data: IPost) {
    this.router.navigate(['post', data.id]);
  }
}
