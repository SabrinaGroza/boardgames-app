export class Game {
    name: string;
    max_playtime?: string;
    max_players?: string;
    description?:string;
        constructor (name: string, length: string, players: string, description: string){
            this.name = name;
            this.max_playtime = length;
            this.max_players = players;
            this.description = description;
        }

}