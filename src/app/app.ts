import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Proyects } from "./components/proyects/proyects";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Proyects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-josuevilca');
}
