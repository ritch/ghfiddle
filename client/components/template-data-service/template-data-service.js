angular.module('ghaTemplateDataService', []).
  service('templateDataService', function() {
    this._data = {};

    this.clear = function (){
      var data = this.data;
      Object.keys(this._data).forEach(function(key) {
        delete data[key];
      });
    };
  })
