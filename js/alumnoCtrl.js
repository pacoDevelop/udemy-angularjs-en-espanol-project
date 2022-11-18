app.controller('alumnoCtrl', ['$scope','$routeParams','$http', function($scope,$routeParams,$http){

	$scope.setActive("mAlumnos");
	var codigo=$routeParams.codigo;
	$scope.actualizado=false;

	$scope.alumno={};
	
	$http.get("php/servicios/alumnos.getAlumno.php?c="+codigo).then(res=>{
		
		if(!res||!res.data||res.data.err!==undefined){
			window.location="#!/alumnos"
			return;
		}
		$scope.alumno=res.data});
		
	$scope.guardarAlumno=()=>{
		$http.post("php/servicios/alumnos.guardar.php",$scope.alumno).then(res=>{
			$scope.actualizado=res&&res.data&&res.data.err===false;
			setTimeout(()=>{
				$scope.actualizado=false;
				$scope.$apply();
			},3500);
		})
	}
			
}]);