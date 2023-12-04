const bgGradient = document.getElementById('bg-gradient');
const imgOffset = { x: 0, y: 0 };

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    imgOffset.x = (clientX / window.innerWidth) * 85;
    imgOffset.y = (clientY / window.innerHeight) * 85;

    bgGradient.style.transform = `translate(-${imgOffset.x}%, -${imgOffset.y}%)`;
});

//=====================================================================================//
//                              Loading Page Element                                   //
//=====================================================================================//

document.addEventListener("DOMContentLoaded", function () {
    var largeImage = new Image();
    largeImage.src = 'img/gradient_2.png';

    largeImage.onload = function () {
        document.getElementById("loadingContainer").style.display = "none";
    };
});

// Frame Size: 1920, 1080 //Note that I have expanded the width and height by 1% of the viewport

// New Frame Size: 1440 x 810

// Button     (xPos,   yPos)     x%      y%      diam.       diam/vw
// =========  ==============   =====    =====    ======      =======
// Projects:  (1080.56, 300)   56.28    27.78    300         15.62vw
// HTML:      (1480.56, 210)   77.11    19.44    181.61      16.18vh wrong
// Weeklies:  (1720.56, 360)   89.61    33.33    128.19      11.87vh wrong
// About:     (1000.56, 720)   52.11    66.67    186.89      17.30vh wrong
// Contact:   (800.56,  930)   41.69~   86.11    135.28      12.52vh wrong
// Games:     (763.56,  150)   39.77    13.89    130.26      12.06vh wrong