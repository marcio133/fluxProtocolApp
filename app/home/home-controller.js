angular.module('myApp').controller('HomeController', function($scope) {
    $scope.models = {
        selected: null,
        templates: [
            { type: "procedimento", title: "Procedimento", content: "Descrição", id: 1 },
            { type: "pergunta", title: "Pergunta", content: "", id: 1 },
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

    $scope.model = [];

    $scope.dragoverCallback = function(index, type) {
        if ($scope.model.length > 0) {
            if (index == 0) {
                if ($scope.model[index].type != "encerra" && type == "encerra") {
                    return false;
                } else {
                    return true;
                }
            } else {
                if (type == "encerra") {
                    if ($scope.model[index] == undefined && $scope.model[index - 1].type != "encerra") {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    if (index != 0) {
                        if ($scope.model[index - 1].type == "encerra") {
                            return false;
                        } else {
                            return true;
                        }
                    } else {
                        if (type != "encerra") {
                            return true;
                        } else {
                            return false;
                        }
                    }

                }
            }

        } else {
            return true;
        }

    };

    $scope.dragOverConditionalCallback = function(index, type) {
        if (type == "encerra") {
            return false;
        } else {
            return true;
        }
    }

    $scope.focus = function(id) {
        console.log(id);
        $('#' + id).focus();
    }


    $scope.$watch('model', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
});