angular.module('notesApp', [])
    .service('ItemService', [ItemService]) //DI service
    .controller('MainCtrl', [function() {
        var self = this;
        self.tab = 'first';
        self.open = function(tab) {
            self.tab = tab;
        };
    }])
    .controller('SubCtrl', ['ItemService', function(ItemService) {
        var self = this;
        self.list = function() {
            return ItemService.list();
        };

        self.add = function() {
            ItemService.add({
                id: self.list().length + 1,
                label: 'Item' + self.list().length
            });
        };
    }])

function ItemService() {
    //private paramters for service
    var items = [{
            id: 1,
            label: 'Item0'
        },
        {
            id: 2,
            label: 'Item1'
        }
    ];
    //public methods
    this.list = function() {
        return items;
    };
    this.add = function(item) {
        items.push(item);
    };
}
