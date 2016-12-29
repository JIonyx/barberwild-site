var sceneImages = [
    {
        name: "background",
        x: 0, 
        y: 0
    },
    {
        name: "wild",
        x: 0,
        y: 0
    },
    {
        name: "signboard",
        x: 0,
        y: 0
    }

];


function newScene() {
    var scene = document.querySelector('.scene');
    var canvas = document.querySelector(".scene__canvas");
    canvas.width = scene.offsetWidth;
    canvas.height = scene.offsetHeight;

    var context = canvas.getContext("2d");

    var images = [];
    for (let i = 0; i < sceneImages.length; i++) {
        images.push({
            image: document.querySelector('.scene__' + sceneImages[i].name),
            x: sceneImages[i].x,
            y: sceneImages[i].y
        });
    }


    var x = 0;
    let y = 0;

    function draw() {
        // requestAnimationFrame(draw);
        // x++;
        // context.fillStyle = "#ff0000";
        // context.fillRect(x, 0, 200, 100);
    }

    draw();
}

newScene();

function setupMainScene() {
    // Bar scene parallax
    let scene = document.querySelector('.scene');
    let background = document.querySelector('.scene__background');
    let signboard = document.querySelector('.scene__signboard');
    let bar  = document.querySelector('.scene__bar');
    let lamps = document.querySelector('.scene__lamps');
    let wild = document.querySelector('.scene__wild');
    let wildOriginalX = wild.offsetLeft;
    let wildOriginalH = wild.offsetHeight;
    let chairs = document.querySelector('.scene__chairs');
    parallaxY(0);

    var targetDX;


    document.onmousemove = function(event) {
        parallaxX(event.x);
        // parallaxY(event.y);
    }


    function parallaxX(dx) {
        let sceneWidth = scene.offsetWidth;
        targetDX = dx - sceneWidth * 0.5;


        let chairsDestDX = -targetDX * 0.04 // div 25
        let chairsShiftDX = chairsDestDX - chairs.offsetLeft;
        chairs.style.left = Math.floor(chairsShiftDX) * 2 + "px";

        // let mouseDX = dx;
        // wild.style.left = shiftDX + "px";
        // bar.style.left = shiftDX + "px";
        // lamps.style.left = shiftDX * 0.125 + "px"; // div 8
        // background.style.left = signboard.style.left = shiftDX * 0.0625 + "px"; // div 16
        // = shiftDX * 0.0625 + "px"; // div 16
    }


    function parallaxY(dy) {
        let sceneHeight = scene.offsetHeight;
        let mouseDY = Math.min(dy, sceneHeight) - sceneHeight / 2;
        let originalTop = sceneHeight / 2 - wildOriginalH / 2;
        wild.style.top = (originalTop - mouseDY / 25) + "px";
        bar.style.top = (originalTop - mouseDY / 50) + "px";
        lamps.style.top = (originalTop - mouseDY / 200) + "px";
        background.style.top = (originalTop - mouseDY / 400) + "px";
        signboard.style.top = (originalTop - mouseDY / 400) + "px";
    }

    let sprites = document.querySelectorAll('.scene__sprite');
    for (let i = 0; i < sprites.length; i++){
        sprites[i].style.left = Math.floor(Math.random() * window.innerWidth) + "px";
        sprites[i].style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    }

    function animateSprites() {
        window.requestAnimationFrame(animateSprites);
        // console.log(sprites[2].offsetTop);
    }
    animateSprites();
}