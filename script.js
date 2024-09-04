$(document).ready(function(){
  $(".list-group-item").click(function(){
    $(".list-group-item").removeClass("active");
    $(this).addClass("active");
  });

  $("#modalCriar, #modalFeed, #modalConnect, #modalNotify").on('hidden.bs.modal', function () {
    $(".list-group-item").removeClass("active");
  });

  $(".btn-close, .btn-danger").click(function(){
    $(".list-group-item").removeClass("active");
  });
});