describe('Controller: ListCtrl', function() {

	beforeEach(module('notesApp'));

	var ctrl;

	//$controller AngularJs Service
	//dependence inject
	beforeEach(inject(function($controller) {
		ctrl = $controller('ListCtrl');
	}));

	it('should have times available on load', function() {
		expect(ctrl.items).toEqual([ {
			id : 1,
			label : 'First',
			done : true
		}, {
			id : 2,
			label : 'Second',
			done : false
		} ]);
	});

	if ('should have highlight items based on state', function() {
		var item = {
			id : 1,
			label : 'First',
			done : true
		};

		var actualClass = ctrl.getDoneClass(item);
		expect(actualClass.finished).toBeTruthy();
		expect(actualClass.unfinished).toBeFalsy();

		item.done = false;
		actualClass = ctrl.getDoneClass(item);
		expect(actualClass.finished).toBeFalsy();
		expect(actualClass.unfinished).toBeTruthy();
	});

});
