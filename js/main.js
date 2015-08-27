window.onload= function(){
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
 

            function animate(offset){
                list.style.left=parseInt(list.style.left)+offset+'px';
            }
            next.onclick = function(){
                animate(-1563);
            }
            prev.onclick = function() {
                animate(1563);
            }



}



            
