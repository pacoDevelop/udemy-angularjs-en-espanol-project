app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){
	
	$scope.setActive("mAlumnos");

	$scope.alumnos={}
	$scope.posicion= 5;

	$http.get("php/servicios/alumnos.listado.php").then(res=>$scope.alumnos=res.data)

	$scope.siguientes=()=>{
		$scope.posicion+=$scope.alumnos.length>$scope.posicion?5:0
	}

	$scope.anteriores=()=>{
		$scope.posicion-=$scope.posicion>5?5:0
	}
}]);