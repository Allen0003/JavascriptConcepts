put the parametes in the constructor is Dependency injection.
It has more flexibility, testability, and maintainability.
	constructor(engine, doors) {
		this.engine = new Engine();
		this.doors = new Doors();
	}


Reference: https:egghead.io/lessons/angular-2-what-is-dependency-injection-b9f0c87e?course=angular-2-dependency-injection-di-explained