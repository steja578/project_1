import { Component } from '@angular/core';
import { TopDeals } from '../top-deals/top-deals';
import { Databinding } from '../databinding/databinding';
import { Directives } from "../directives/directives";

@Component({
  selector: 'app-body',
  imports: [Databinding,
    TopDeals, Directives],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
