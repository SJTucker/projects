'use strict';

var _ = require('lodash');
var count = 5;

exports.index = function(req, res){
  //var random = _.random(2, 4);
  var names = _.sample(global.flags, 5);
  var flags = _.shuffle(names);
  res.render('home/index', {names: names, flags: flags, title: 'Flappy Flags'});
};

exports.match = function(req, res){
  var flag = _.find(global.flags, {country:req.query.name});
  if(count > 1){
    if(flag.flag === req.query.flag){
      res.send({flag:'match'});
      count -= 1;
    }else{
      res.send({flag: 'fail'});
    }
  }else if(flag.flag === req.query.flag) {
    res.send({flag: 'you win'});
  }


};

