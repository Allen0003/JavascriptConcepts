import {Component} from 'angular2/core';
import { NgForm } from '@angular/forms';
import { Pokemon } from '../pokemon/pokemon';
@Component({
  //moduleId: module.id,
  selector: 'app-hero-form',
  templateUrl: 'app/pokemon-form/pokemon-form.component.html',
  styleUrls: ['app/pokemon-form/pokemon-form.component.css']
})
export class PokemonFormComponent {

  public model = new Pokemon(141, 'Snowlax', 'lazy' );
  public submitted = false;
  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }
}
