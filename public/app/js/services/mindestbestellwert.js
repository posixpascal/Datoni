angular.module('datoniApp.services')
.service("Delivery", function(){
  var Delivery = function(){
    var cities = [
      'Bad Camberg', 'Würges', 'Erbach',
      'Schwickershausen', 'Oberselters', 'Gnadenthal',
      'Eisenbach', 'Dombach', 'Walsdorf',
      'Bechtheim', 'Beuerbach', 'Niederselters', 'Selters',
      'Wallrabenstein', 'Steinfischbach', 'Dauborn', 'Münster', 'Esch', 'Haintchen', 'Hasselbach', 'Weyer', 'Oberbrechen',
      'Riedelbach', 'Reichenbach', 'Wörsdorf', 'Niederbrechen', 'Heftrich', "Neesbach", "Ohren", "Kirberg"
    ];

    this.locations = cities.map(function(l){
      if (l)
        return l.toLowerCase();
    });
  };

  Delivery.prototype.canDeliverTo = function(location){
    if (location)
      return (this.locations.indexOf(location.toLowerCase()) > -1);
  }
  return new Delivery();
})

.service("Mindestbestellwert", function(){
  var Mindestbestellwert = function(location){
    this.location = location;
    this.mbs = [
      {
        name: "ab 5 Euro",
        price: 5,
        radius: ['Bad Camberg', 'Würges', 'Erbach']
      },
      {
        name: "ab 8 Euro",
        price: 8,
        radius: ['Schwickershausen', 'Oberselters', 'Gnadenthal']
      },
      {
        name: "ab 12 Euro",
        price: 12,
        radius: ['Eisenbach', 'Dombach', 'Walsdorf']
      },
      {
        name: "ab 14 Euro",
        radius: ['Bechtheim', 'Beuerbach', 'Niederselters', 'Selters'],
        price: 14
      },
      {
        name: "ab 20 Euro",
        radius: ['Wallrabenstein', 'Steinfischbach', 'Dauborn', 'Münster', 'Esch', 'Haintchen', 'Hasselbach', 'Weyer', 'Oberbrechen'],
        price: 20
      },
      {
        name: "ab 25 Euro",
        radius: ['Riedelbach', 'Reichenbach', 'Wörsdorf', 'Niederbrechen', 'Heftrich', "Neesbach", "Ohren", "Kirberg"],
        price: 25
      }
    ];

    return this;
  };

  Mindestbestellwert.prototype.getMindestbestellwert = function(location){
    var price = "-"
    angular.forEach(this.mbs, function(mb){
      if (mb.radius.indexOf(location) >= 0){
        price = mb.price
      }
    })
    return price;
  }

  Mindestbestellwert.prototype.getLocations = function(){
    var locations = [];
    angular.forEach(this.mbs, function(mb){
      angular.forEach(mb.radius, function(m){
        console.log(m);
        locations.push(m)
      });
    })
    return locations;
     /*_.flatten(_.map(this.mbs, function(mbs){
      return mbs.radius
    }));*/
  }
  Mindestbestellwert.prototype.getLevel = function(){
    var result = false;
    var location = this.location;
    for (var i = 0, len = this.mbs.length; i < len; i++){
      var currentMBW = this.mbs[i];
      if (currentMBW.radius.indexOf(location) > -1){
        result = currentMBW;
        break;
      }
    }
   
    return result;
  };


  return Mindestbestellwert;
})
