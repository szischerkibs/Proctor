(function () {
    'use strict';

    angular
        .module('app.partial')
        .controller('ExportSessionsController', ExportSessionsController);

    function ExportSessionsController($q, salesService, logger, moment) {
        var vm = this;
        vm.title = 'User';

        activate();

        function activate() {
        }
    }
})();
