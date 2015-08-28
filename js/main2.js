 $(function () {
            var container = $('#container');
            var list = $('#list');
            var buttons = $('#buttons span');
            var prev = $('#prev');
            var next = $('#next');
            var index = 1;
            var len = 5;
            var interval = 3000;
            var timer;


            function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 1000, function () {
                    if(left > -1366){
                        list.css('left', -1366 * len);
                    }
                    if(left < (-1366 * len)) {
                        list.css('left', -1366);
                    }
                });
            }

            function showButton() {
                buttons.eq(index-1).addClass('on').siblings().removeClass('on');
            }

            function play() {
                timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 5) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1366);
                showButton();
            });

            prev.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
                if (index == 1) {
                    index = 5;
                }
                else {
                    index -= 1;
                }
                animate(1366);
                showButton();
            });

            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -1366 * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });

            container.hover(stop, play);

            play();

            $(".nad li").mousemove(function() {
                $(this).find("ul").slideDown("3000");
            });

             $(".nad li").mouseleave(function() {
                 $(this).find("ul").slideUp("slow");
             });
        });
