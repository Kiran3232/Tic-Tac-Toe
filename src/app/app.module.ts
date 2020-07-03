import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SinglePlayerComponent } from './components/single-player/single-player.component';
import { MultiplayerLocalComponent } from './components/multiplayer-local/multiplayer-local.component';
import { MultiplayerOnlineComponent } from './components/multiplayer-online/multiplayer-online.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SinglePlayerComponent,
    MultiplayerLocalComponent,
    MultiplayerOnlineComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
