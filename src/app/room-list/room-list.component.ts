import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: any;

  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.rooms = this.roomService.getRoomsList();
  }

  deleteRoom(roomId: number) {
    this.roomService.deleteRoom(roomId).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => {
        console.log(error);
      }
    );
  }

  roomDetails(roomId: number) {
    this.router.navigate(['details', roomId]);
  }

  updateRoom(roomId: number) {
    this.router.navigate(['update', roomId]);
  }
}
