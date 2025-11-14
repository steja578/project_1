import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  commentArr: any=[];
  comments_url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient: HttpClient){
  }
  
}
