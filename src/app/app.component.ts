import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Room } from './room/room.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title!: "MetHotels";
  rooms: Room[];
  roomToUpdateIndex: number;
  roomForm: FormGroup;

  constructor(fb: FormBuilder, private store: Store<AppState>) {
    this.rooms = [
      new Room('1', 100),
      new Room('2', 200),
      new Room('3', 300),
    ];

    this.rooms.forEach(element => {
      this.store.dispatch({
        type: 'ADD_ROOM',
        payload: element
      });
    });

    this.roomToUpdateIndex = -1;
    this.roomForm = fb.group({
      'roomNum': ['', Validators.required],
      'price': [0, Validators.required]
    });

    this.roomForm.valueChanges.subscribe(
      (form: any) => {
        if (form.roomNum.length < 6) {
          console.log("Duzina broja sobe je manja od 6");
        }
      }
    );

  }

  addRoom() {
    if (this.roomForm.valid) {
      if (this.roomToUpdateIndex === -1) {
        let room = new Room(this.roomForm.controls['roomNum'].value, this.roomForm.controls['price'].value);
        this.rooms.push();
        this.store.dispatch({
          type: 'ADD_ROOM',
          payload: room
        });
      } else {
        this.rooms[this.roomToUpdateIndex].roomNumber = this.roomForm.controls['roomNum'].value;
        this.rooms[this.roomToUpdateIndex].roomPrice = this.roomForm.controls['price'].value;
      }
      this.roomForm.reset();
      this.roomToUpdateIndex = -1;
    }
  }

  deleteRoom(room: Room) {
    this.rooms = this.rooms.filter(item => {
      return item.roomNumber !== room.roomNumber
    });
  }

  updateRoom(room: Room) {
    let index = this.rooms.findIndex(i => i.roomNumber === room.roomNumber);
    (<HTMLInputElement>document.getElementById('roomNum')).value = this.rooms[index].roomNumber;
    (<HTMLInputElement>document.getElementById('price')).valueAsNumber = this.rooms[index].roomPrice;
    this.roomToUpdateIndex = index;
  }


  addRoomExternal(room: Room) {
    this.rooms.push(room);
  }

  randomize() {
    var currentIndex = this.rooms.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.rooms[currentIndex];
      this.rooms[currentIndex] = this.rooms[randomIndex];
      this.rooms[randomIndex] = temporaryValue;
    }

  }
}
