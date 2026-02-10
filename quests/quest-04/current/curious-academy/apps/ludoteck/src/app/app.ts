import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainMenu } from '../shared/menus/main-menu/main-menu';

@Component({
  imports: [MatSliderModule, RouterOutlet, MainMenu],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ludoteck';
}
