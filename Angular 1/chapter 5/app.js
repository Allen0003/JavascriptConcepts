angular.module('notesApp', []).controller('MainCtrl', [function() {
    var self = this;
    self.tab = 'first';
    self.open = function(tab) {
        self.tab = tab;
    };
}]).controller('SubCtrl', [function() {
    alert("controller");
    var self = this;
    self.list = [{
            id: 1,
            label: 'Item0'
        },
        {
            id: 2,
            label: 'Item1'
        }
    ];

    self.add = function() {
        self.list.push({
            id: self.list.length + 1,
            label: 'Item' + self.list.length
        });
        alert("size = " + self.list.length);
    };
}]);
