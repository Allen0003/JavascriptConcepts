import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app'
})

@View({
  template: `
    <h2>Showing data using component properties with interpolation</h2>
    <h3>Player Name:{{player}}</h3>
    <h3>He is famous in: {{sport}}</h3><br>

    <h2>Showing data using constructor or variable initialization</h2>
    <h3>India capital is: {{capital}}</h3><br>

    <h2>Showing data using array property with NgFor</h2>
    <h3>My favorite fruit is: {{myfruit}}</h3>
    <p>List of Fruits:</p>
    <ul>
       <li *ngFor="#fruit of fruits">
          {{ fruit }}
       </li>
    </ul>
    `
})

export class MyTemplate {
   player: 'M.S. Dhoni ';
   sport:'Cricket';

capital: string;
constructor() {
   this.capital = 'New Delhi';
}

fruits = ['Apple', 'Orange', 'Mango', 'Grapes'];
   myfruit = this.fruits[1];
}