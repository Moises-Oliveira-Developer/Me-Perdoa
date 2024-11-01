
let scaleFactor = 1;


document.getElementById('button_n').addEventListener('click', function() {
    const buttonSim = document.getElementById('button_s');
    

    scaleFactor += 0.1;
    

    buttonSim.style.transform = `scale(${scaleFactor})`;
});


document.getElementById('button_s').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    

    popup.style.display = 'block';
    

    setTimeout(function() {
        window.location.href = 'flowers.html';
    }, 1000);
});