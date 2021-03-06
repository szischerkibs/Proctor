/* jshint -W117 */
(function () {
    'use strict';

    angular
        .module('app.partial')
        .controller('ManageController', ManageController);

    function ManageController($q, sessionService, logger, userService, moment) {
        var vm = this;
        vm.title = 'Manage';
        vm.schedule = [];
        vm.sessions = [];

        activate();

        function activate() {
            getMySchedule();
        }

        function getMySchedule() {
            sessionService.getUserSchedule(userService.user().userId).then(
                function (data) {
                    vm.schedule = data;
                    vm.schedule.sessions = _.chain(vm.schedule.sessions)
                        .sortBy(function(session) { return session.sessionStartTime; })
                        .groupBy(function (session) {
                            return moment(session.sessionStartTime).format("M/D/YY");})
                        .value();
                }
            );
        }
    }
})();
/* jshint +W117 */
