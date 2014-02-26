(function(){

  'use strict';

  $(document).ready(initialize);

  var name;
  var flag;

  function initialize(){
    $(document).foundation();
    //countdown();
    $('#flags').on('click', '.name', storeName);
    $('#flags').on('click', '.flag', storeFlag);
    $('#match').click(match);
  }

  function storeName(){
    name = $(this).text();
    console.log(name);
  }
  
  function storeFlag(){
    var icon = $(this).attr('class');
    console.log(icon);
    flag = icon.slice(10,12);
    console.log(flag);
  }

  function match(){
    var url = '/match?name=' + name + '&flag=' + flag;
    $.getJSON(url, function(data){
      console.log(data.flag);
    });
  }

 /* function countdown(){
    var counter = 60;
    var timer = setInterval(function(){
      if(counter > 0){
        counter -= 1;
        $('#timer').text(counter);
      }else{
        clearInterval(timer);
        alert('Times Up! :(');
      }
    }, 1000);
  }*/

})();

