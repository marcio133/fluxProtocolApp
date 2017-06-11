angular.module('myApp').controller('HomeController', function($scope) {
    $scope.models = {
        selected: null,
        templates: [
            { type: "procedimento", title: "Procedimento", content: "Descrição", id: 1 },
            { type: "pergunta", title: "Pergunta", content: "Descrição", id: 1 },
            { type: "exame", title: "Exame Físico", content: "Descrição", id: 1 },
            { type: "prescricao", title: "Prescrição de medicamentos", content: "Desrição", id: 1 },
            { type: "encerra", title: "Encerrar Atendimento", content: "", id: 1 },
            {
                type: "perguntaCondicional",
                title: "Pergunta Condicional",
                content: "Pergunta",
                options: ["opção 1", "opção 2"],
                id: 1,
                columns: [
                    [],
                    []
                ]
            }
        ]
    };

    $scope.model = []

    $scope.$watch('model', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
});