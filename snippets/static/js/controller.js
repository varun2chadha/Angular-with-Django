function customerController($scope, $http) {
    $http.get('/static/data/Rating_Plan.json').success(
        function (data) {
            $scope.data = data;
            $scope.trans = window.polyglot;
            $('#GeneralInformation').removeClass('Loading');
        }
    );

}

function tabController($scope, $http) {

    $http.get('../data/Header.json').success(
        function (data) {
            $scope.data = data;
            $scope.trans = window.polyglot;

        }

    );

    $scope.rlconversion = function ($event) {
        var _id = $event.currentTarget.id;
        if (_id == "RTL") {
            var angular_link = $("link[rel=stylesheet]")
            $(angular_link[0]).attr({
                href: "/static/css/bootstrap.rtl.css"
            });
        } else if (_id == "LTR") {
            var angular_link = $("link[rel=stylesheet]")
            $(angular_link[0]).attr({
                href: "/static/css/bootstrap.min.css"
            });
        }
    }

    $scope.englishConversion = function ($event) {
        _locale = 'en';

        $.getJSON('/static/locales/' + 'en' + '.json', function (data) {
            window.polyglot = new Polyglot({
                phrases: data
            });
        })
    }
    $scope.frenchConversion = function ($event) {
        _locale = 'de';

        $.getJSON('/static/locales/' + 'de' + '.json', function (data) {
            window.polyglot = new Polyglot({
                phrases: data
            });
        })
    }
}

function footersController($scope, $http) {
    $http.get('/static/data/Footer.json').success(
        function (data) {
            $scope.data = data;
            $scope.trans = window.polyglot;
        }
    );
}

function ratinPlanCtrl($scope, $http) {
    $http.get('/static/data/general-information.json').success(
        function (data) {
            $scope.data = data;
            $scope.trans = window.polyglot;
            $('#RatingPlan').removeClass('Loading');
        }
    );
}