var myApp = angular.module("myApp", []);
myApp.controller("wikiController", function ($scope, $http) {
    $scope.search = function () {
        $scope.result = [];
        $http({
            url: "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" +
                $scope.input +
                "&format=json"
        }).then(
            function (success) {
                var length = success.data[1].length;

                for (var i = 0; i < length; i++) {

                    $scope.result.push({
                        name: success.data[1][i],
                        title: success.data[2][i],
                        link: success.data[3][i]

                    });
                }
            },
            function (error) {
                console.log("check api");
            }
        ).then;
        $scope.random = function () {
            window.open("https://en.wikipedia.org/wiki/Special:Random");
        };
    };
});