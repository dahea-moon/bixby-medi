var http = require('http');
var config = require('config');
var dates = require('dates');
var tool = require('lib/tool.js');


module.exports.function = function searchBasedDestination (destination, where) {
  var curtime = new dates.ZonedDateTime.now();
  var userday = curtime.getDayOfWeek();
  var usertime = curtime.getHour();
  if (usertime == 0) {
    var usertime = '0' + usertime
  }
  var curmin = curtime.getMinute();
  if (curmin < 10) {
    var usermin = '0' + curmin
  } else {
    var usermin = curmin
  }
  var longt = destination.point.longitude
  var lat = destination.point.latitude

  var target = tool.changeKoreantoUrl(where);

  const response = http.getUrl('http://bixby-medi.herokuapp.com/api/' + target + '/search_nearest/', {
      format: 'json',
      query: {
        longtitude: longt,
        latitude: lat,
        curday: userday,
        curtime: usertime + ':' + usermin,        
      }
    });
  
  let nearests = [];
  if (target == 'AED') {
    response.forEach(function(aed){
      let info = {
        'address': aed.address,
        'place': aed.place,
        'manager': aed.manager,
        'call': aed.call,
        'location': {
            'longitude': aed.longt,
            'latitude': aed.langt
          }
      }
      nearests.push(info);
    })
  } else if (target == 'sooyusil') {
    response.forEach(function(sooyu) {
      let info = {
        'name': sooyu.name,
        'address': sooyu.address,
        'call': sooyu.call,
        'location': {
          'longitude': sooyu.longt,
          'latitude': sooyu.langt
        }
      }
      nearests.push(info)
  })
  } else if (target == 'moonlight') {
      if (userday == 1) {
      response.forEach(function(moon) {
      if (moon.duty8 == 'true') {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty1_open,
      'close': moon.duty1_close,
      'holiday_open': moon.duty8_open,
      'holiday_close': moon.duty8_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty1_open,
      'close': moon.duty1_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } } )
      } else if (userday == 2) {
      response.forEach(function(moon) {
      if (moon.duty8 == 'true') {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty2_open,
      'close': moon.duty2_close,
      'holiday_open': moon.duty8_open,
      'holiday_close': moon.duty8_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty2_open,
      'close': moon.duty2_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } } )
      } else if (userday == 3) {
      response.forEach(function(moon) {
      if (moon.duty8 == 'true') {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty3_open,
      'close': moon.duty3_close,
      'holiday_open': moon.duty8_open,
      'holiday_close': moon.duty8_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty3_open,
      'close': moon.duty3_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } } )
      } else if (userday == 4) {
      response.forEach(function(moon) {
      if (moon.duty8 == 'true') {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty4_open,
      'close': moon.duty4_close,
      'holiday_open': moon.duty8_open,
      'holiday_close': moon.duty8_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty4_open,
      'close': moon.duty4_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } } )
      } else if (userday == 5) {
      response.forEach(function(moon) {
      if (moon.duty8 == 'true') {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty5_open,
      'close': moon.duty5_close,
      'holiday_open': moon.duty8_open,
      'holiday_close': moon.duty8_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty5_open,
      'close': moon.duty5_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } } )
      } else if (userday == 6) {
      response.forEach(function(moon) {
      if (moon.duty8 == 'true') {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty6_open,
      'close': moon.duty6_close,
      'holiday_open': moon.duty8_open,
      'holiday_close': moon.duty8_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty6_open,
      'close': moon.duty6_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } } )
      } else if (userday == 7) {
      response.forEach(function(moon) {
      if (moon.duty8 == 'true') {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty7_open,
      'close': moon.duty7_close,
      'holiday_open': moon.duty8_open,
      'holiday_close': moon.duty8_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': moon.name,
      'address': moon.address,
      'call': moon.call,
      'open': moon.duty7_open,
      'close': moon.duty7_close,
      'location' : {
      'longitude': moon.longt,
      'latitude': moon.langt
      }
      }
      nearests.push(info)
      } } ) }
      } else {
      if (userday == 1) {
      response.forEach(function(hospital) {
      if (hospital.duty8 == 'true') {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty1_open,
      'close': hospital.duty1_close,
      'holiday_open': hospital.duty8_open,
      'holiday_close': hospital.duty8_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty1_open,
      'close': hospital.duty1_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } } )
      } else if (userday == 2) {
      response.forEach(function(hospital) {
      if (hospital.duty8 == 'true') {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty2_open,
      'close': hospital.duty2_close,
      'holiday_open': hospital.duty8_open,
      'holiday_close': hospital.duty8_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty2_open,
      'close': hospital.duty2_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } } )
      } else if (userday == 3) {
      response.forEach(function(hospital) {
      if (hospital.duty8 == 'true') {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty3_open,
      'close': hospital.duty3_close,
      'holiday_open': hospital.duty8_open,
      'holiday_close': hospital.duty8_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty3_open,
      'close': hospital.duty3_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } } )
      } else if (userday == 4) {
      response.forEach(function(hospital) {
      if (hospital.duty8 == 'true') {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty4_open,
      'close': hospital.duty4_close,
      'holiday_open': hospital.duty8_open,
      'holiday_close': hospital.duty8_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty4_open,
      'close': hospital.duty4_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } } )
      } else if (userday == 5) {
      response.forEach(function(hospital) {
      if (hospital.duty8 == 'true') {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty5_open,
      'close': hospital.duty5_close,
      'holiday_open': hospital.duty8_open,
      'holiday_close': hospital.duty8_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty5_open,
      'close': hospital.duty5_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } } )
      } else if (userday == 6) {
      response.forEach(function(hospital) {
      if (hospital.duty8 == 'true') {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty6_open,
      'close': hospital.duty6_close,
      'holiday_open': hospital.duty8_open,
      'holiday_close': hospital.duty8_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty6_open,
      'close': hospital.duty6_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } } )
      } else if (userday == 7) {
      response.forEach(function(hospital) {
      if (hospital.duty8 == 'true') {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty7_open,
      'close': hospital.duty7_close,
      'holiday_open': hospital.duty8_open,
      'holiday_close': hospital.duty8_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } else {
      let info = {
      'name': hospital.name,
      'address': hospital.address,
      'place': hospital.place,
      'call': hospital.call,
      'open': hospital.duty7_open,
      'close': hospital.duty7_close,
      'location' : {
      'longitude': hospital.longt,
      'latitude': hospital.langt
      }
      }
      nearests.push(info)
      } } )
      }}
  return nearests;
}