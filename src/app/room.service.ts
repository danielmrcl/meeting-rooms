import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl: string = 'http://localhost:8080/api/rooms';

  constructor(private http: HttpClient) { }

  getRoomsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deleteRoom(roomId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${roomId}`);
  }

  createRoom(room: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, room);
  }

  getRoom(roomId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${roomId}`);
  }

  updateRoom(roomId: number, room: Room): Observable<any> {
    return this.http.put(`${this.baseUrl}/${roomId}`, room);
  }
}
