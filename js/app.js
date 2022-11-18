var app = angular.module('universidadApp',['ngRoute','ui.mask']);

app.controller('mainCtrl', ['$scope','$http', ($scope,$http)=>{
  
	$scope.menuSuperior = 'parciales/menu.html';
	$scope.telefonoMask ="9999-9999"

	$scope.setActive = function(Opcion){

		$scope.mInicio     = "";
		$scope.mProfesores = "";
		$scope.mAlumnos    = "";

		$scope[Opcion] = "active";

		
	}
	
}]);

//Filtro personalizado de teléfono
app.filter("telefono",()=>{
	return (numero)=>numero.substring(0,4)+"-"+numero.substring(4)});