//ADD A HOVER SLIGHT GROWTH AND WIGGLE ANIMATION TO EACH BOX

$("body").delegate('.box','click', function(){

    if ($('.box.active').length <= 0){

        $(this).addClass('cloned');

        var parent = $(this).parent();
        var pos = $(this).position();
        var clone = $(this).clone().addClass('active');
        $(this).css({left: pos.left + 'px', top: pos.top + 'px'});

        parent.append(clone);

        clone.css({left: pos.left + 'px', top: pos.top + 'px'}).animate({
            width: '100%',
            height : '100%',
            top: 0,
            left: 0
        },500);
    }
});

$("body").delegate('.box.active','click', function(){

        var cloned = $('.box.cloned');
        var clone = $('this');
        var pos = cloned.position();
        var w = cloned.width();
        var h = cloned.height();

        $(this).animate({
            width: w + 'px',
            height : h + 'px',
            top: pos.top + 'px',
            left: pos.left + 'px'
        },500, function(){
            $('.box.active').remove();
            cloned.removeClass('cloned');
        });
});

$("#box5, #box4, #box3, #box2, #box1")
  .mouseenter(function() {
    $(this).css("opacity", "1");
  })
  .mouseleave(function() {
    $(this).css("opacity", ".9");
  });
