import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cartItem } from 'src/app/models';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

  @Input() contents:any[]; 
  // @Input() content: cartItem[] = [];
  @Output() onId = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  clickId(id: String){
    // console.log(id);
    this.onId.next(id);
  }

}
