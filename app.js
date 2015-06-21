angular.module('myApp', []).
	directive('makeEditable', function() {
		return {
			restrict: 'A',
			templateUrl: 'editable-template.html',
			scope: true,
			transclude: true
        };
    });
