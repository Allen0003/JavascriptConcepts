import {Component} from "angular2/core";

@Component({
   selector:'my-list',
   template:`<h2>List of Fruits</h2>
   <ul>
      <li *ngFor="#myItem of itemList">{{myItem.name}}</li>
   </ul>
   `
})
export class ItemComponent{
   public itemList = [
      {name:"Apple"},
      {name:"Orange"},
      {name:"Grapes"},
   ];
}