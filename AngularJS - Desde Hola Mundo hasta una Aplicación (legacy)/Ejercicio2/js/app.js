var app= angular.module('universityApp',[]);

app.controller('profesorCtrl',function ($scope) {
$scope.profesor = profesorData;
$scope.editando = {};
$scope.editar=false;
$scope.editarProfesor = ()=>{
    angular.copy($scope.profesor,$scope.editando);
    $scope.editar=true;
}
$scope.saveProfesor=()=>{
    angular.copy($scope.editando,$scope.profesor);
    $scope.editar=false;
};
$scope.cancelProfesor=()=>{
    $scope.editando = {};
    $scope.editar=false;
};

});



var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}