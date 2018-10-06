import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(
              public name: string,
              public artist: string,
              public link: string,
              public thumbnail: string,
              public artistId: string
  ) { }

  ngOnInit() {
  }

}
