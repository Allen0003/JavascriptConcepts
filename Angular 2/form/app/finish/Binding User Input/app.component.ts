import {Component} from 'angular2/core';
import {ItemListComponent} from './shopping-list.component';

@Component({
    selector: 'my-app',
    template: `
    <my-list></my-list>
    `,
    directives:[ItemListComponent]
})
export class AppComponent {}