var canvas = document.getElementById("id1")

function draw_rect() {
    var ctx = canvas.getContext("2d");

    ctx.strokeRect(25,25,100,100);
}

draw_rect()