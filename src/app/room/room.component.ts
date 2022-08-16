import { RoomService } from './../services/room.service';
import { Room } from './room.model';
import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  // Profesore ja vec imam view za Room kao i model tako da resenje za ovaj domaci vec postoji u okviru projekta
  @Output() roomToDelete: EventEmitter<Room>;
  @Output() updateRoom: EventEmitter<Room>;
  @HostBinding('attr.class') cssClass = 'row';
  @Input()
    room!: Room;

  constructor(private roomService: RoomService) {
    this.roomToDelete = new EventEmitter();
    this.updateRoom = new EventEmitter();
  }

  ngOnInit(): void {
  }

  // racunanje cene
  calculatePriceForNights(numberOfNights: number): number {
    let price = this.roomService.getPrice(numberOfNights, this.room.roomPrice);
    console.log(price);
    return price;
  }

  public deleteRoom(): void {
    this.roomToDelete.emit(this.room);
  }

  public changeRoom(): void {
    this.updateRoom.emit(this.room);
  }

}
