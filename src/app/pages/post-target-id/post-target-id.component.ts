import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { MatDialog } from '@angular/material/dialog';
import { SearchCommentsComponent } from 'src/app/templates/search-comments/search-comments.component';

interface ISearch {
  name?: string;
  email?: string;
  body?: string;
}

@Component({
  selector: 'app-post-target-id',
  templateUrl: './post-target-id.component.html',
  styleUrls: ['./post-target-id.component.scss'],
})
export class PostTargetIdComponent {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private dialog: MatDialog
  ) {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.data$ = this.postService.fetchPostId({
      id: this.postId ? parseInt(this.postId) : undefined,
    });
    this.comment$ = this.postService.fetchComment({
      id: this.postId ? parseInt(this.postId) : undefined,
    });
  }

  postId: string | null;
  data$;
  comment$;
  searchOption: ISearch = {};

  setFilter() {
    const d = this.dialog.open(SearchCommentsComponent);
    d.afterClosed().subscribe((v) => {
      this.searchOption = v;
    });
  }

  isSearchOptionSet() {
    return (
      this.searchOption?.body ||
      this.searchOption?.email ||
      this.searchOption?.name
    );
  }
  isEmailFilter(value: string) {
    if (!this.searchOption.email) return false;
    else {
      return value.toLowerCase().includes(this.searchOption.email);
    }
  }
  isNameFilter(value: string) {
    if (!this.searchOption.name) return false;
    else {
      return value.includes(this.searchOption.name);
    }
  }
  isBodyFilter(value: string) {
    if (!this.searchOption.body) return false;
    else {
      return value.includes(this.searchOption.body);
    }
  }
}
