angular.module('myApp').controller('HomeController', function($scope) {
    $scope.models = {
        selected: null,
        templates: [
            { type: "procedimento", title: "Procedimento", content: "", id: 1 },
            { type: "pergunta", title: "Pergunta", content: "", id: 1 },
            { type: "exame", title: "Exame Físico", content: "", id: 1 },
            { type: "prescricao", title: "Prescrição de medicamentos", content: "", id: 1 },
            {
                type: "perguntaCondicional",
                title: "Pergunta Condicional",
                content: "",
                options: ["", ""],
                id: 1,
                columns: [
                    [],
                    []
                ]
            },
            { type: "encerra", title: "Encerrar Atendimento", content: "", id: 1 },

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
    };

    $scope.focus = function(item) {
        var id = '#' + item.id + item.type;
        $(id).focus();
    };

    $scope.focusINput = function(item, index) {
        var id = '#' + item.id + item.type + "-" + index;
        $(id).focus();
    }

    $scope.showModel = function() {
        $scope.showM = !$scope.showM;
    }

    $scope.saveForm = function() {
        var count = 0;
        angular.forEach($scope.model, function(item, index) {
            if (item.type == "encerra") {
                count++;
            }
        });
        if (count == 0 || $scope.model.length < 2) {
            $scope.errorMessage = "Opa! Parece que você ainda não encerrou o protocolo."
        } else {

        }
    }

    $scope.closeError = function() {
        $scope.errorMessage = null;
    }

    $scope.$watch('model', function(model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);
});