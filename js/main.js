$(document).ready(function() {

  $("#text-logo").mouseover(function(){
    $(this).attr("src", "img/alternate-logo.png");
  });

  $("#text-logo").mouseout(function(){
    $(this).attr("src", "img/logo-white-smaller.png");
  });

  $("#post-image-four").mouseover(function(){
    $(this).attr("src", "img/mockpostfourpic-hover.png");
  });

  $("#post-image-four").mouseout(function(){
    $(this).attr("src", "img/mockpostfourpic.png");
  });

  $("#post-image-three").mouseover(function(){
    $(this).attr ("src", "img/mockpostthreepic-hover.png");
  });

  $("#post-image-three").mouseout(function(){
    $(this).attr ("src", "img/mockpostthreepic.png");
  });

  $("#post-image-two").mouseover(function(){
    $(this).attr("src", "img/mockposttwopic-hover.png");
  });

  $("#post-image-two").mouseout(function(){
    $(this).attr("src", "img/mockposttwopic.png");
  });

  $("#post-image-one").mouseover(function(){
    $(this).attr("src", "img/mockpostonepic-hover.png");
  });

  $("#post-image-one").mouseout(function(){
    $(this).attr("src", "img/mockpostonepic.png");
  });

});
