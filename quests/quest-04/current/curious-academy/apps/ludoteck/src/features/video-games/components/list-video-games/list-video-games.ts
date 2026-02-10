import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { VideoGame, VideoGames } from '../../models/video-game';
import { TableVideoGames } from '../table-video-games/table-video-games';
import { AddVideoGame } from '../add-video-game/add-video-game';
import { FiltersVideoGames } from '../filters-video-games/filters-video-games';

@Component({
  selector: 'app-list-video-games',
  imports: [TableVideoGames, AddVideoGame, FiltersVideoGames],
  templateUrl: './list-video-games.html',
  styleUrl: './list-video-games.css',
})
export class ListVideoGames implements OnInit, OnDestroy {

  list: VideoGames = [
    {
      id: 1,
      label: 'Final Fantasy 14',
      year: 2020
    },
    {
      id: 2,
      label: 'Final Fantasy 10',
      year: 2001
    }
  ]


  toRemoveOneElementParentSpecific(item: VideoGame): void {
    console.info("label :", item.label)

    this.list = this.list.filter((videoGame: VideoGame) => {
      return videoGame.id !== item.id;
    });
  }

  toRemoveOneElementParent(label: string): void {
    this.list.pop();
  }

  ngOnInit(): void {
    console.info("ListVideoGames: init")
  }

  ngOnDestroy(): void {
    console.info("ListVideoGames: destroy")
  }
}
