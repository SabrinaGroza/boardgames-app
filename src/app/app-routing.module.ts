import { MyGamesComponent }  from './my-games/my-games.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopPlayersComponent } from './top-players/top-players.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path : 'my-games' , component: MyGamesComponent},
  {path: 'top-games',
    component: TopPlayersComponent,
  },
  {path : 'index.html', component: HomeComponent},
  {path : '' , component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
