import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommentService } from '../../services/comment-service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentArr: Comment[]=[];
  comments_url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private commentService: CommentService){  
  }

  ngOnInit(){
  this.fetchData_Angular();
  // this.fetchData_Javascript();
  }

  fetchData_Angular(){
    this.commentService.getAllComments().subscribe((response: Comment[])=>{
      this.commentArr=response;
    });
  }
  
  fetchData_Javascript(){
    fetch(this.comments_url)
    .then(response => response.json())
    .then(data => {
      this.commentArr = data;
    });
}
  // ngOnInit(){
  //   this.httpClient.get(this.comments_url).subscribe((response: any) => {    // to get the data from url we write .subscribe in subscrive we we will get response 
  //     this.commentArr = response; 
  //   });
  // }

 
}