'use strict';

angular.module('statusapp.directives', [])

// Create an Element directive for item detailed Modal template

.directive('detailmodal', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "templates/common/detailmodaltemplate.html"
    }
})

// Create an Element directive for Status List Details template

.directive('statuslistdetails', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "templates/common/statuslistdetails.html"
    }
})

// Create an Element directive for Status List Heading template

.directive('statuslisthead', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "templates/common/statuslisthead.html"
    }
});