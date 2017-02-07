import {Component} from 'angular2/core';
import { HeroFormComponent } from './hero-form/hero-form.component';
@Component({
  //moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  //styleUrls: ['app.component.css'],
  directives: [HeroFormComponent]
})
export class AppComponent {
  title = 'app works!';
}
