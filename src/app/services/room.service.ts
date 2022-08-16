import { Injectable } from '@angular/core';

@Injectable()
export class RoomService {

  constructor() { }

  public getPrice(numberOfNights: number, perNight: number): number {
    return numberOfNights * perNight;
  }
}
