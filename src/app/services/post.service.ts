import { Injectable } from '@angular/core';
import { Post } from '../models/post.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private post: Post[] = [];
  private updatedPost = new Subject<Post[]>();
  constructor() { }

  getPost() {
    return [...this.post];
  }

  getPostUpdateListner() {
    return this.updatedPost.asObservable();
  }
  
  addPost(post: Post) {
    this.post.push(post);
    this.updatedPost.next([...this.post]);
  }
}
