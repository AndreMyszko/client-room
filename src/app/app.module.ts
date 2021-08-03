import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    RoomDetailsComponent,
    UpdateRoomComponent,
    CreateRoomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
