angular.module('myApp').controller('HomeController', function($scope) {
    $scope.models = {
        selected: null,
        templates: [
            { type: "procedimento", title: "Procedimento", content: "Ação", id: 2 },
            { type: "pergunta", title: "Pergunta", content: "Resposta", id: 2 },
            {
                type: "container",
                id: 1,
                columns: [
                    [],
                    []
                ]
            }
        ],
        dropzones: {
            "A": [{
                    "type": "procedimento",
                    "title": "Procedimento",
                    "id": "4"
                },
                {
                    "type": "procedimento",
                    "title": "Procedimento",
                    "id": "5"
                },
                {
                    "type": "procedimento",
                    "title": "Procedimento",
                    "id": "6"
                }
            ]
        }
    };

    $scope.$watch('models.dropzones', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
});