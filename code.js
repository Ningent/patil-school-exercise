window.onload = function () {
    var patil = document.getElementById("patil");
    var absolou_y = window.innerHeight;
    var arr = new Array();

    for (var i = 0; i < 20; i++) {
        var patilCloned = patil.cloneNode(true);
        patilCloned.style.position = "absolute";

        var r_x = Math.random() * window.innerWidth;
        var r_y = Math.random() * 50;
        var arak = Math.random() * 10; 

        patilCloned.style.left = r_x + "px";
        patilCloned.style.top = r_y + "px";

        document.body.appendChild(patilCloned);

        arr.push({
            element: patilCloned,
            y: r_y,
            speed: arak
        });
    }

    function move() {
        arr.forEach(function (obg) {
            var y = parseInt(obg.element.style.top, 10);  


            if (y < absolou_y) {
                y += obg.speed;  
                obg.element.style.top = y + "px";  
                obg.y = y;  
            } else {
                obg.element.style.top = "0px";  
            }
        });

        requestAnimationFrame(move);
    }

    move();
};
