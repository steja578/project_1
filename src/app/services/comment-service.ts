import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comments_url = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private httpClient: HttpClient){
  }

  getAllComments():Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.comments_url)
  }
  
}
