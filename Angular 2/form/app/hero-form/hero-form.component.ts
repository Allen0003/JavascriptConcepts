import {Component} from 'angular2/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../shared/hero';
@Component({
    //moduleId: module.id,
    selector: 'app-hero-form',
    templateUrl: 'app/hero-form/hero-form.component.html',
    styleUrls: ['app/hero-form/hero-form.component.css']
})
export class HeroFormComponent {
    public powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer', 'super speed'];

    //***********because Hero is exported from ../shared/hero, we can new Hero here!
    public model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    public submitted = false;
    active = true;
    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }



}
