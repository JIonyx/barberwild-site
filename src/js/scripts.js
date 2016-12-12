;
setTimeout(function(){
    $('body').addClass('loaded');
});



// Bar scene parallax
let scene = document.querySelector('.scene');
let signboard = document.querySelector('.scene__signboard');
let bar  = document.querySelector('.scene__bar');
let lamps = document.querySelector('.scene__lamps');
let wild = document.querySelector('.scene__wild');
let wildOriginalX = wild.offsetLeft;
let wildOriginalH = wild.offsetHeight;
parallaxY(0);

// let helper = document.querySelector('.scene__helper');

document.onmousemove = function(event) {
    // helper.style.left = event.x + "px";
    // helper.style.top = event.y + "px";

    // console.log(wildOriginalX); 
    parallaxX(event.x);
    parallaxY(event.y);
}

// alert(scene.offsetWidth + "   " + scene.offsetHeight);

function parallaxX(dx) {
    let sceneWidth = scene.offsetWidth;
    let mouseDX = dx - sceneWidth / 2;
    wild.style.left = (-mouseDX / 25) + "px";
    bar.style.left = (-mouseDX / 25) + "px";
    lamps.style.left = (-mouseDX / 200) + "px";
}


function parallaxY(dy) {
    let sceneHeight = scene.offsetHeight;
    let mouseDY = Math.min(dy, sceneHeight) - sceneHeight / 2;
    let originalTop = sceneHeight / 2 - wildOriginalH / 2;
    wild.style.top = (originalTop - mouseDY / 25) + "px";
    bar.style.top = (originalTop - mouseDY / 50) + "px";
    lamps.style.top = (originalTop - mouseDY / 200) + "px";
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