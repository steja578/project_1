import { Component } from '@angular/core';
import { TopDeals } from '../top-deals/top-deals';
import { Databinding } from '../databinding/databinding';
import { Directives } from "../directives/directives";
import { Employeestable } from "../employeestable/employeestable";
import { MyModel } from "../my-model/my-model";
import { UserList } from '../user-list/user-list';

@Component({
  selector: 'app-body',
  imports: [Databinding,
    TopDeals, Directives, Employeestable, MyModel, UserList],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
