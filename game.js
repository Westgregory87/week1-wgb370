if(jQuery){
   var checkAnswers = function(){
    var answerString = "";
    var answers = $(":checked");
    answers.each(function(i){
        answerString = answerString + answers[i].value;
    });
    $(":checked").each(function(i){
        var answerString = answerString + answers[i].value;
    });
    checkIfCorrect(answerString);  
  }; 
   var checkIfCorrect = function(theString){      

    if ($('input[name=questioin1]:checked').value() =="a"){
      $("#correct1").show();
    }
    if ($('input[name=questioin2]:checked').value() =="b"){
      $("#correct2").show();
    }
    if ($('input[name=questioin3]:checked').value() =="c"){
      $("#correct3").show();
    }
    if ($('input[name=questioin4]:checked').value() =="d"){
      $("#correct4").show();
    }
    if ($('input[name=questioin5]:checked').value() =="a"){
      $("#correct5").show();
    }
    if ($('input[name=questioin6]:checked').value() =="b"){
      $("#correct6").show();
    }
    if ($('input[name=questioin7]:checked').value() =="c"){
      $("#correct7").show();
    }
    if ($('input[name=questioin1]:checked').value() =="d"){
      $("#correct8").show();
    }
    if ($('input[name=questioin1]:checked').value() =="a"){
      $("#correct9").show();
    }
    if ($('input[name=questioin1]:checked').value() =="b"){
      $("#correct10").show();
    }
   };    

   $("#question1").css("background-color", "lightblue");
   $("#question1").show();     
  };

  if(impress){
    $("#question2").css("background-color", "lightgreen");
    $("#question2").show();
  };
  if(atom){
    $("#question3").css("background-color", "lightblue");
    $("#question3").show();
  };
  if(createjs){
    $("#question4").css("background-color", "lightgreen");
    $("#question4").show();
  };
  if(me){
    $("#question5").css("background-color", "lightblue");
    $("#question5").show();
  };
  if(require){
    $("#question6").css("background-color", "lightgreen");
    $("#question6").show();
  };
  if($().playground){
    $("#question7").css("background-color", "lightblue");
    $("#question7").show();
  };
  if(jaws){
    $("#question8").css("background-color", "lightgreen");
    $("#question8").show();
  };
  if(enchant){
    $("#question9").css("background-color", "lightblue");
    $("#question9").show();
  };
  if(Crafty){
    $("#question10").css("background-color", "lightgreen");
    $("#question10").show();
  };
  
  