angular.module('datoniApp.services')
.service("OpeningTimes", function(){


  var OpeningTimes = function(){
    this.days = [
    'sonntag',
    'montag',
    'dienstag',
    'mittwoch',
    'donnerstag',
    'freitag',
    'samstag'
    ];



    this.times = {
      'montag': {
        'morgens': ['10:00', '13:30'],
        'abends': ['16:00', '22:00']
      },

      'dienstag': {
        'morgens': ['10:00', '13:30'],
        'abends': ['16:00', '22:00']
      },

      'mittwoch': {
        'morgens': ['10:00', '13:30'],
        'abends': ['16:00', '22:00']
      },

      'donnerstag': {
        'morgens': ['10:00', '13:30'],
        'abends': ['16:00', '22:00']
      },

      'freitag': {
        'morgens': ['10:00', '13:30'],
        'abends': ['16:00', '22:00']
      },

      'samstag': {
        'morgens': ['10:00', '13:30'],
        'abends': ['16:00', '20:30']
      },

      'sonntag': {
        'morgens': ['10:00', '13:30'],
        'abends': ['16:00', '20:30']
      }
    };

    return this;
  };

  OpeningTimes.prototype.isOpen = function(){
    var currentDate = new Date();
    var currentTime = {
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes()
    };

    var currentDay = currentDate.getDay();
    var currentDayName = this.days[currentDay];
    var openingTimes = this.times[currentDayName.toLowerCase()];

    // get opening times for current day.
    var timeSpan = "abends";
    if (currentTime.hours < 14){ timeSpan = "morgens"; }

    var openAt = this._str2date(openingTimes[timeSpan][0]);
    var closedAt = this._str2date(openingTimes[timeSpan][1]);
    var currentAt = this._str2date(currentTime.hours + ":" + currentTime.minutes);

    return (+currentAt < +closedAt && +currentAt > +openAt);
  };

  OpeningTimes.prototype._str2date = function(time){
    var times = time.split(":");
    var hours = times[0];
    var minutes = times[1];
    var currentDate = new Date();
    return new Date(currentDate.getYear(), currentDate.getMonth(), currentDate.getDate(), hours, minutes);
  };


  OpeningTimes.prototype.isClosed = function(){
    return !this.isOpen();
  };


  return new OpeningTimes();
})
