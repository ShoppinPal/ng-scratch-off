angular.module('super-awesome-demo',['shoppinpal.scratch-off'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl: "demo.html",
                controller: "DemoCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });

    }])
    .run(['scratchOffConfig', function(scratchOffConfig){
        scratchOffConfig.hiddenText = "Now I don't itch!";
    }])
    .controller('DemoCtrl', ['$scope', DemoCtrl]);

function DemoCtrl($scope) {

}