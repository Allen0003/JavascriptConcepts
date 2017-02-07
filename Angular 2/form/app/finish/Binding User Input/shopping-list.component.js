System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ItemListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ItemListComponent = (function () {
                function ItemListComponent() {
                    this.listItems = [
                        { name: "apple" },
                        { name: "orange" },
                        { name: "grapes" },
                    ];
                    this.selectedItem = { name: "" };
                }
                ItemListComponent.prototype.onItemClicked = function (listItem) {
                    this.selectedItem = listItem;
                };
                ItemListComponent.prototype.onAddItem = function (listItem) {
                    this.listItems.push({ name: listItem.value });
                };
                ItemListComponent.prototype.onDeleteItem = function () {
                    this.listItems.splice(this.listItems.indexOf(this.selectedItem), 1);
                };
                ItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-list',
                        template: "\n      <ul>\n         <li *ngFor=\"#listItem of listItems\"\n            (click)=\"onItemClicked(listItem)\">{{listItem.name}}\n         </li>\n      </ul>\n      <input type=\"text\" [(ngModel)]=\"selectedItem.name\">\n      <button (click)=\"onDeleteItem()\">Delete Item</button><br><br>\n      <input type=\"text\" #listItem>\n      <button (click)=\"onAddItem(listItem)\">Add Item</button>\n   "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ItemListComponent);
                return ItemListComponent;
            }());
            exports_1("ItemListComponent", ItemListComponent);
        }
    }
});
//# sourceMappingURL=shopping-list.component.js.map