import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommentService } from '../../services/comment-service';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentArr: Comment[]=[];
  comments_url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private commentService: CommentService){
  }

  fetchdata(){
    this.commentService.getAllComment().subscribe((response:comment[])=>{
      this.commentArr=response;
    })
  }

  // ngOnInit(){
  //   this.httpClient.get(this.comments_url).subscribe((response: any) => {    // to get the data from url we write .subscribe in subscrive we we will get response 
  //     this.commentArr = response; 
  //   });
  // }

 
