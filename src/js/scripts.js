;
window.onload = function() {
    // alert(window.innerWidth + '  ' + window.innerHeight);
    setTimeout(function(){
        $('body').addClass('loaded');
    });

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


    document.onmousemove = function(event) {
        parallaxX(event.x);
        // parallaxY(event.y);
    }


    function parallaxX(dx) {
        let sceneWidth = scene.offsetWidth;
        let mouseDX = dx - sceneWidth * 0.5;
        // let mouseDX = dx;
        let shiftDX = -mouseDX * 0.04 // div 25
        chairs.style.left = shiftDX * 2 + "px";
        wild.style.left = shiftDX + "px";
        bar.style.left = shiftDX + "px";
        lamps.style.left = shiftDX * 0.125 + "px"; // div 8
        background.style.left = signboard.style.left = shiftDX * 0.0625 + "px"; // div 16
        // = shiftDX * 0.0625 + "px"; // div 16
    }


    function parallaxY(dy) {
        let sceneHeight = scene.offsetHeight;
        let mouseDY = Math.min(dy, sceneHeight) - sceneHeight / 2;
        let originalTop = sceneHeight / 2 - wildOriginalH / 2;
        wild.style.top = (Math.floor(originalTop - mouseDY / 25)) + "px";
        bar.style.top = (Math.floor(originalTop - mouseDY / 50)) + "px";
        lamps.style.top = (Math.floor(originalTop - mouseDY / 200)) + "px";
        background.style.top = (Math.floor(originalTop - mouseDY / 400)) + "px";
        signboard.style.top = (Math.floor(originalTop - mouseDY / 400)) + "px";
    }

    let sprites = document.querySelectorAll('.scene__sprite');
    for (let i = 0; i < sprites.length; i++){
        sprites[i].style.left = Math.floor(Math.random() * window.innerWidth) + "px";
        sprites[i].style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    }

    function animateSprites() {
        window.requestAnimationFrame(animateSprites);
        console.log(sprites[2].offsetTop);
    }
    animateSprites();
}

// vectors
function Vector2D(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector2D.prototype.getlength = function() {
    return Math.sqrt(this.getLengthSquare());
}

Vector2D.prototype.getLengthSquare = function() {
    return this.x * this.x + this.y * this.y;
}

Vector2D.prototype.multiply = function() {

}

Vector2D.prototype.devide = function() {

}

Vector2D.prototype.normalize = function() {

}
























var marker = { 
    "city-name": "Калининград",
    "icon": "cactus.png",
    "show-name": true,
    "description": [
        {
            "shop-name": "OldBoy Barbershop",
            "address": "ул. Театральная 30<br> ТРЦ «Европа»",
            "phone-display": "+7(4012) 52-57-90",
            "phone": "84012525790",
            "email": "",
            "url": "http://oldboybarbershop.com/kaliningrad",
            "social": [
                {
                    "name": "vkontakte",
                    "icon": "vk",
                    "url": "https://vk.com/oldboy_barbershop"
                },
                {
                    "name": "facebook",
                    "icon": "fb",
                    "url": "https://www.facebook.com/oldboybarbershop.kaliningrad"
                },
                {
                    "name": "instagram",
                    "icon": "inst",
                    "url": "https://www.instagram.com/oldboy_kaliningrad/"
                }
            ]
        },
        {
            "shop-name": "OldBoy Barbershop",
            "address": "ул. Артеллерийская 22<br> ТЦ «Aртеллерийский»",
            "phone-display": "+7(4012) 52-59-59",
            "phone": "84012525959",
            "email": "",
            "url": "http://oldboybarbershop.com/kaliningrad",
            "social": [
                {
                    "name": "vkontakte",
                    "icon": "vk",
                    "url": "https://vk.com/oldboy_barbershop"
                },
                {
                    "name": "facebook",
                    "icon": "fb",
                    "url": "https://www.facebook.com/oldboybarbershop.kaliningrad"
                },
                {
                    "name": "instagram",
                    "icon": "inst",
                    "url": "https://www.instagram.com/oldboy_kaliningrad/"
                }
            ]
        }
    ]
}