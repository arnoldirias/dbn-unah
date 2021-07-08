    //$scope.modalDescargo = 1;

    $scope.incr = function() {
            $scope.modalDescargo++;
            tabsModalDescargo.children[$scope.modalDescargo - 1].children[0].click();
        } //no used

    $scope.decr = function() {
            $scope.modalDescargo--;
            tabsModalDescargo.children[$scope.modalDescargo - 1].children[0].click();
        } //no used

    $scope.back = function() {
            return $scope.modalDescargo > 1;
        } //no used

    $scope.next = function() {
            return $scope.modalDescargo < 4;
        } //no used

    $scope.activar = function(index) {
            if (index == $scope.modalDescargo) {
                $scope.modalDescargo = index;
                // tabsModalDescargo.children[$scope.modalDescargo - 1].children[0].click();
                return "active enabled";
            } else if (index < $scope.modalDescargo) {
                return "enabled";
            }
            return "disabled";
        } //no used

    $scope.tabClick = function(index) {} //no used