import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotgamesService {

  constructor(private http: HttpClient) { }

  getHotGames(){
    return this.http.get("https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&pretty=true&client_id=JLBr5npPhV")
    .pipe(map((data : any)=>data.games), 
    catchError(error => { return throwError('Its a Trap!')}));
    // return this.http.get<Game[]>("https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&pretty=true&client_id=JLBr5npPhV");
  }
}
