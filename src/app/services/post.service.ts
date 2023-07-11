import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IPostFetch {
  postId?: number;
}
type IPost =
  | {
      postId: number;
      id: number;
      title: string;
      body: string;
    }
  | { email: string };

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  readonly postUrl = 'https://jsonplaceholder.typicode.com/posts';
  readonly commentUrl = 'https://jsonplaceholder.typicode.com/comments';

  fetchPost({ postId }: IPostFetch) {
    let url = this.postUrl;
    if (postId) url += `/${postId}`;
    return this.http.get(url);
  }

  fetchComment({ postId }: IPostFetch) {
    let params;
    if (postId) params = new HttpParams().set('postId', postId);
    const url = this.commentUrl;
    return this.http.get<Observable<IPost | IPost[]>>(url, { params });
  }
}
