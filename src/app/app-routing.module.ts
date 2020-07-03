import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SinglePlayerComponent } from './components/single-player/single-player.component';
import { MultiplayerLocalComponent } from './components/multiplayer-local/multiplayer-local.component';
import { MultiplayerOnlineComponent } from './components/multiplayer-online/multiplayer-online.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'single', component: SinglePlayerComponent },
  { path: 'multi-local', component: MultiplayerLocalComponent },
  { path: 'multi-online', component: MultiplayerOnlineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
