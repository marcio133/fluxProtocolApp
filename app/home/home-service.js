//Este é um serviço tamplate
angular.module("myApp").factory("HomeService", function($http, config) {
    var self = this;
    self.protocols = [];

    var _addProtocol = function(protocol) {
        console.log("added");
        self.protocols.push(protocol);
    };

    var _getProtocols = function() {
        return self.protocols;
    }

    return {
        addProtocol: _addProtocol,
        getProtocols: _getProtocols
    };
});