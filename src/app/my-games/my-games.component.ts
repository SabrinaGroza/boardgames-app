import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Game } from '../models/game';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit {

  
  games: Game [] = [];
  allGames: Game [] = [];
  name:any;
  @ViewChild('name1', { static: true }) name1?: ElementRef;
  @ViewChild('length') length?: ElementRef;
  @ViewChild('players') players?: ElementRef;
  @ViewChild('description') description?: ElementRef;
  constructor() {
    this.games.push(new Game("Nemesis","180 min","5","Nemesis is a semi-cooperative game in which you and your crewmates must survive on a ship infested with hostile organisms. To win the game, you have to complete one of the two objectives dealt to you at the start of the game and get back to Earth in one piece. You will find many obstacles on your way: swarms of Intruders (the name given to the alien organisms by the ship AI), the poor physical condition of the ship, agendas held by your fellow players, and sometimes just cruel fate."));
    this.games.push(new Game("Teraforming Mars","120 min","5","In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things."));
    this.games.push(new Game("Wingspan","70 min","5","You are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to your network of wildlife preserves. Each bird extends a chain of powerful combinations in one of your habitats (actions). These habitats focus on several key aspects of growth"));
    this.games.push(new Game("Codenames","15 min","8","Codenames is an easy party game to solve puzzles."));
    this.allGames = this.games;
   }

  ngOnInit(): void {
  }
title ='My games'
headers = ["Name", "Game length", "Max no. of players", "Description"];

addGame() {
  const name = this.name1?.nativeElement.value;
  const length = this.length?.nativeElement.value;
  const players = this.players?.nativeElement.value;
  const description = this.description?.nativeElement.value;
  this.games.push(new Game(name,length,players,description));
  this.allGames = this.games;
  //this.games.push(new Game("Mario", "12 min", "6"));
  // this.games = [...this.games, new Game(name, length, players)];

  alert("Game added to the list");
  
}

Search(){
  if(this.name == ""){
  this.games = this.allGames;
  }else{
    this.games = this.games.filter(res =>{
      return res.name.toLowerCase().match(this.name.toLowerCase());
    })
  }
}
deleteGame(id : number){
  this.games = this.games.filter((v, i) => i !==id);
    }
// rows:any = [
//   {
//   "Name": "Terraforming Mars",
//   "Game length" : "120 min",
//   "Max no. of players": "5"
// },
// {
//   "Name": "Wingspan",
//   "Game length" : "70 min",
//   "Max no. of players": "5"
// },
// {
//   "Name": "Codenames",
//   "Game length" : "15 min",
//   "Max no. of players": "8"
// },
// ]

}
