import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HotelConfig, HotelPhoto } from '../types';


@Component({
  selector: 'app-hotelphoto',
  templateUrl: './hotelphoto.component.html',
  styleUrls: ['./hotelphoto.component.css']
})
export class HotelphotoComponent implements OnInit {

  photos: HotelPhoto[] = [];
  selectedPhoto: String = "";

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.hotelConfig$.subscribe((val) => {this.photos = val.photos});
  }

  selectPhoto(p: HotelPhoto){
    this.selectedPhoto = p.URL;
  }


}
