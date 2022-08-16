export class Room {

  roomNumber!: string;
  roomPrice!: number;

  constructor(roomNumber: string, roomPrice: number) {
    this.roomNumber = roomNumber;
    this.roomPrice = roomPrice;
  }
}
