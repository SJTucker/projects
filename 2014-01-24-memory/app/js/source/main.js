(function(){
  
  'use strict';

  $(document).ready(init);

  function init(){
    $('#play').click(play);
    $('#gameDivs').on('click', '.divs', clickDiv);
  }
  debugger;
  var alphabet = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lettersArray = alphabet[Math.floor(Math.random() * 24)];
  for(var i = 0; i < 1; i++){
    for(i = 0; i < 9; i++){
      var letters= alphabet[Math.floor(Math.random() * 24)];
      lettersArray += letters;
    }
  }

 /* function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){
      return o;
    }
  }*/



  lettersArray = lettersArray + lettersArray;
//  lettersArray = shuffle(lettersArray);
  console.log(lettersArray);


  function play(){
    //for(var i = 0; i < lettersArray.length; i++){
    //  $('.divs:nth-child(' + Math.floor(Math.random() * 25) + ')').text(lettersArray[i]);
//    for(var i in lettersArray){
//      $('.divs:nth-child(' + i + ')').text(lettersArray[Math.floor(Math.random() * 11)]);
//    }
   // }
   // }
    for(var i = 0; i < lettersArray.length; i++){
      $('.divs:nth-child(' + i + ')').text(lettersArray[i]);

    }
  }

  function clickDiv(){
    alert('hey');
  }




})();
