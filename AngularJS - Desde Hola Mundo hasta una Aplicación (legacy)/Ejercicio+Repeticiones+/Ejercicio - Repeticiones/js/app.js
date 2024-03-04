(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	$scope.lista=["test1","test2","test3"];
    $scope.listaProfesores=[{
        nombre:"Test",
        edad:29,
        clase:"H"
    },{
        nombre:"Test2",
        edad:32,
        clase:"HW"
    },{
        nombre:"Test3",
        edad:123,
        clase:"HD"
    }]



}]);





})();
