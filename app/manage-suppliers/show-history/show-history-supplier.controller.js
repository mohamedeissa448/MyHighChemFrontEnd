(function() {
  "use strict";

  angular
    .module("managesuppliers")
    .controller("ShowHistorySupplierController", ShowHistorySupplierController);

  /* @ngInject */
  function ShowHistorySupplierController(
    $mdToast,$filter,
    $mdDialog,
    UserService,
    triLoaderService,
    $http,
    history
  ) {
    var vm = this;
    vm.history = history;
    vm.checkedDates = [];

    angular.forEach(vm.history, function(item, index) {
      console.log(item, index);
      vm.checkedDates.push(item["Supplier_EditingTime"]);
      
    });
    console.log(vm.checkedDates)
    vm.SubmitData = function(form) {
      console.log("form");
    };
    vm.CloseForm = function() {
      $mdDialog.hide();
    };
    vm.ShowHistory = function(item){
      vm.selectedDate = item;
      vm.SelectedHistoryData = vm.history
    }
  }
})();
