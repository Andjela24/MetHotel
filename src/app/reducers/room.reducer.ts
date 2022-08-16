import { Room } from '../room/room.model';
import { Action } from '@ngrx/store';

export const ADD_ROOM = 'ADD_ROOM';

export function roomReducer(state: Room[] = [], action) {
  switch (action.type) {
    case ADD_ROOM:
      return [...state, action.payload];
    default:
      return state;
  }
}
