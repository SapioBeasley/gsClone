angular.module('app', [])

    .controller('FrameController', ['$injector', function ($injector) {
        let vm = this;

        vm.message = 'Google';

        vm.submitSearch = () => {
            if (vm.searchInput === undefined) {
                alert('Enter a serch term')
            } else {
                alert('You have searched for ' + vm.searchInput)
            }
        };

        vm.feelingLucky = () => {
            alert('Feeling Lucky are you?')
        }
    }]);

setTimeout(function () {
    angular.bootstrap(document.getElementById('body'), ['app']);
});
