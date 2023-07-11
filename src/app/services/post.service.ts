import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IPostFetch {
  id?: number;
}

export type IPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type IComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  readonly postUrl = 'https://jsonplaceholder.typicode.com/posts';
  readonly commentUrl = 'https://jsonplaceholder.typicode.com/comments';

  fetchPostList(): Observable<IPost[]> {
    let url = this.postUrl;
    return this.http.get<IPost[]>(url);
  }
  fetchPostId({ id }: IPostFetch): Observable<IPost> {
    let url = this.postUrl;
    if (id) url += `/${id}`;
    return this.http.get<IPost>(url);
  }

  fetchComment({ id }: IComment) {
    let params;
    if (id) params = new HttpParams().set('postId', id);
    const url = this.commentUrl;
    return this.http.get<Observable<IPost | IPost[]>>(url, { params });
  }
}
