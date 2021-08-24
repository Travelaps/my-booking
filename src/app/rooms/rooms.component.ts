import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Rooms } from '../types';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(public apiService: ApiService) { }
 Rooms: Rooms=[];
  ngOnInit(): void {
    this.apiService.rooms$.subscribe((roomsInfo)=> this.Rooms = roomsInfo)
  }

}
