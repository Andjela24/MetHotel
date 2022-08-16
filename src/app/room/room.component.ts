import { Room } from './room.model';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Output() roomToDelete: EventEmitter<Room>;
  @Output() updateRoom: EventEmitter<Room>;
  @Input()
    room!: Room;

  constructor() {
    this.roomToDelete = new EventEmitter();
    this.updateRoom = new EventEmitter();
  }

  ngOnInit(): void {
  }
  public deleteRoom(): void {
    this.roomToDelete.emit(this.room);
  }

  public changeRoom(): void {
    this.updateRoom.emit(this.room);
  }
} 
