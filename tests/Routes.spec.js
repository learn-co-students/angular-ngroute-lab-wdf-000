describe('Routes', function () {
	var $route;

	beforeEach(module('app'));

	describe('User', function () {

		beforeEach(inject(function ($injector) {
			$route = $injector.get('$route');
		}));

		var state;
		it('should have the correct URL', function () {
			state = $route.routes['/user/:name'];

			expect(state).toBeDefined();
		});

		it('should use the right controller', function () {
			expect(state.controller).toContain('UserController');
		});

		it('should have a resolve', function () {
			expect(state.resolve).toBeDefined();
		});
	});
});