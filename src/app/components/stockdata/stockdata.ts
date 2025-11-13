import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stockdata',
  imports: [],
  templateUrl: './stockdata.html',
  styleUrl: './stockdata.css',
})
export class Stockdata {
  stockdata: any[] = [];
  stocksdata_url = 'http://endeavourtech.ddns.net:8095/stockanalytics/stocks/getAllStockFundamentalsJPA'

  constructor(private httpClient: HttpClient){
  }

  ngOnInit(){
    this.httpClient.get(this.stocksdata_url).subscribe((response: any) => {    // to get the data from url we write .subscribe in subscrive we we will get response 
      this.stockdata = response; 
    });
  }

}
