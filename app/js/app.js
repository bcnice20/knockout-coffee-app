(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.App = (function() {

    function App() {
      this.reset = __bind(this.reset, this);
      this.evo = __bind(this.evo, this);
      this.shift = __bind(this.shift, this);
      this.shooter = __bind(this.shooter, this);      this.shiftTemp = _.template($('#shift-temp').html());
      this.shooterTemp = _.template($('#shooter-temp').html());
      this.evoTemp = _.template($('#evo-temp').html());
    }

    App.prototype.shooter = function() {
      $('#device-list').empty();
      return $('#device-list').append(this.shooterTemp);
    };

    App.prototype.shift = function() {
      $('#device-list').empty();
      return $('#device-list').append(this.shiftTemp);
    };

    App.prototype.evo = function() {
      $('#device-list').empty();
      return $('#device-list').append(this.evoTemp);
    };

    App.prototype.reset = function() {
      return $('#device-list').empty();
    };

    return App;

  })();

  ko.applyBindings(new App);

}).call(this);
