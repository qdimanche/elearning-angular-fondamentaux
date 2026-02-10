import { Component } from '@angular/core';
import { ListVideoGames } from '../features/video-games/components/list-video-games/list-video-games';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import '@angular/localize/init';

@Component({
  imports: [ListVideoGames, NgbAlert],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ludoteck';
}
