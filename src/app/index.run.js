(function() {
  'use strict';

  angular
    .module('medsCalc')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
