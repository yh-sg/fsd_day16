import { Component, Input, OnInit } from '@angular/core';
import { cartItem } from 'src/app/models';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  // @Input() content: cartItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
