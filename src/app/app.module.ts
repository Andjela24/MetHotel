import { RoomService } from './services/room.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { roomReducer } from './reducers/room.reducer'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ room: roomReducer })
  ],
  providers: [
    RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
