import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { FormGroup } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postInput: String;
  title: String;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onAddPost(postForm: FormGroup) {
    if (postForm.invalid) {
      return;
    }
    const post: Post = postForm.value;
    this.postService.addPost(post);
  }

}
