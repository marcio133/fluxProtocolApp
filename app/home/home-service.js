//Este é um serviço tamplate
angular.module("myApp").factory("HomeService", function($http) {
    var self = this;
    self.protocols = [];

    var _addProtocol = function(protocol) {
        console.log("added");
        self.protocols.push(protocol);
    };

    var _getProtocols = function() {
        return self.protocols;
    };

    var _removeProtocol = function(index) {
        self.protocols.splice(index, 1)
    }

    var _getProtocol = function(index) {
        for (var i = 0; i < self.protocols.length; i++) {
            if (i == index) {
                return self.protocols[i];
            }
        }
        return {
            model: [],
            title: ""
        }
    }

    return {
        addProtocol: _addProtocol,
        getProtocols: _getProtocols,
        removeProtocol: _removeProtocol,
        getProtocol: _getProtocol
    };
});