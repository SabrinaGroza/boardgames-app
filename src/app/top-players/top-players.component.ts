import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { HotgamesService } from '../hotgames.service.service';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {

  games: Game[] = [];

  constructor(private hotGamesService: HotgamesService) { }

  ngOnInit(): void {
    this.hotGamesService.getHotGames().subscribe(games =>{
      console.log(games);
      this.games = games;});
  }

}
