import { Component, input, output } from '@angular/core';
import { VideoGame, VideoGames } from '../../models/video-game';

@Component({
  selector: 'app-table-video-games',
  imports: [],
  templateUrl: './table-video-games.html',
  styleUrl: './table-video-games.css',
})
export class TableVideoGames {
  items = input.required<VideoGames>();
  title = input.required<string>();

  askToRemoveOneElement = output<string>();
  askToRemoveOneSpecific = output<VideoGame>();

  clickToRemoveOneElementParent(item: string): void {
    this.askToRemoveOneElement.emit(item);
  }

  clickToRemoveOneElementParentSpecific(item: VideoGame): void {
    this.askToRemoveOneSpecific.emit(item);
  }
}
