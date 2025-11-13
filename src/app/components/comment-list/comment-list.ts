import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentArr: any=[];
  comments_url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient: HttpClient){
  }

  ngOnInit(){
    this.httpClient.get(this.comments_url).subscribe((response: any) => {    // to get the data from url we write .subscribe in subscrive we we will get response 
      this.commentArr = response; 
    });
  }

}
