import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cartItem } from 'src/app/models';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {

  // @Input() itemList:any; 
  @Input() itemList: cartItem;
  @Output() updatedItem = new EventEmitter<cartItem>();
  @Output() deletedItem = new EventEmitter<cartItem>();
  @Output() addedItem = new EventEmitter<cartItem>();

  form: FormGroup = this.createForm();

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(change): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // console.log(change);
    // console.log(this.itemList);
    this.form = this.createForm(this.itemList)
  }

  simpleClick(){
    console.log(this.itemList);
  }

  createForm(item: cartItem = null): FormGroup{
    return this.fb.group({
      id: this.fb.control(item?.id,[Validators.required]),
      item: this.fb.control(item?.item, [Validators.required, Validators.minLength(3)]),
      quantity: this.fb.control(item?.quantity,[Validators.required, Validators.min(1), Validators.max(100)])
    })
  }

  update(){
    // cast, coercion
    const value = this.form.value as cartItem
    console.log(value);
    this.updatedItem.next(value)
    this.form.reset();
  }

  delete(){
    const value = this.form.value.id
    // console.log(value);
    this.deletedItem.next(value)
    this.form.reset();
  }

  add(){
    const value = this.form.value as cartItem
    // console.log(value);
    this.addedItem.next(value)
    this.form.reset();
  }
}
