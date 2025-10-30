import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Body } from './components/body/body';
import { Footer} from './components/footer/footer';
import { Categories } from './components/categories/categories';
import { Carousel } from './components/carousel/carousel';

@Component({
  selector: 'app-root',
  imports: [Navbar,Carousel, Categories, Body, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project_1');
}
