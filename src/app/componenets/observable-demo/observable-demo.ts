import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  imports: [],
  templateUrl: './observable-demo.html',
  styleUrl: './observable-demo.css',
})
export class ObservableDemo {

  user_url = 'https://jsonplaceholder.typicode.com/users';
  private httpClient = inject(HttpClient);

  ngOnInit(){
    this.fetchUserData();
    this.createAndUseCustomObservable();
  }

  fetchUserData() {
    this.httpClient.get(this.user_url).subscribe(
      (partialResponse) => {
        console.log(partialResponse)
      }
    )
}

createAndUseCustomObservable() {
const carsPublisher = new Observable((publisher)=> {
  publisher.next('BMW');
  publisher.next('Audi');
  publisher.next('Mercedes');

});
const  carsSubscriber = carsPublisher.subscribe({
  next:(response)=>console.log('partial response received', response),
  error:(error)=>console.log('error occurred', error),
  complete:()=>console.log('completed')
});
}

num: Observable<number> | undefined;
interval_demo(){

}
}
