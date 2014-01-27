(function(){
  
  'use strict';

  $(document).ready(init);

  function init(){
    $('#play').click(play);
    $('#gameDivs').on('click', '.divs', clickDiv);
  }
//  debugger;
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
  function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
      index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
      counter--;

        // And swap the last element with it
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }

/*  function shuffle(lettersArray) {
    var temp = [];
    while (lettersArray.length) {
      temp.push(lettersArray.splice(Math.random() * lettersArray.length, 1));
    }
    while (temp.length) {
      lettersArray.push(temp.pop());
    }
    return lettersArray;
  }*/

  lettersArray = lettersArray + lettersArray;
  lettersArray = shuffle(lettersArray);
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
      $('.divs:nth-child(' + i + ')').text(lettersArray[i]));

    }
  }
  
  var clicks = [];
  var clickCounter = 0;
  function clickDiv(){
   /* if(clickCounter <= 1){
      $(this).addClass('new');
    }
    else{
      $('.divs').removeClass('new');
    }*/
    console.log(this.textContent);
    if(clickCounter === 0){
      $(this).addClass('new');
      clicks.push(this.textContent);
      clickCounter++;
    }
    else{
      $(this).addClass('new');
      clicks.push(this.textContent);
      
      if(clicks[0] === this.textContent){
        $('.new').addClass('correct');
        clickCounter = 0;
        clicks = [];
      }
      else{
        $('.divs').removeClass('new');
        clicks = [];
        clickCounter = 0;
      }
    }


 //    .css('color', 'black');
  }




})();
