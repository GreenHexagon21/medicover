import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { Body } from './body/body';
import { ActualBody } from './actual-body/actual-body';

@Component({
  imports: [RouterOutlet, Header, Menu, Body, ActualBody],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('medicover');
}
