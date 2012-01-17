class window.App
  constructor: ->
    @shiftTemp = _.template($('#shift-temp').html())
    @shooterTemp = _.template($('#shooter-temp').html())
    @evoTemp = _.template($('#evo-temp').html())

  shooter: =>
    $('#device-list').empty()
    $('#device-list').append(@shooterTemp)

  shift: =>
    $('#device-list').empty()
    $('#device-list').append(@shiftTemp)

  evo: =>
    $('#device-list').empty()
    $('#device-list').append(@evoTemp)

  reset: =>
    $('#device-list').empty()

ko.applyBindings new App