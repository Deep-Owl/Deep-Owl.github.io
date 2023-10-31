const bgGradient = document.getElementById('bg-gradient');
const imgOffset = { x: 0, y: 0 };

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    imgOffset.x = (clientX / window.innerWidth) * 85;
    imgOffset.y = (clientY / window.innerHeight) * 85;

    bgGradient.style.transform = `translate(-${imgOffset.x}%, -${imgOffset.y}%)`;
});