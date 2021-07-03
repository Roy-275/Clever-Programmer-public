function generateImage() {
    var show = document.getElementById('new');
    var image = document.createElement('img');
    image.setAttribute('id','result');
    image.src = "p1.jpg";
    show.appendChild(image);
}
function reset() {
    document.getElementById('result').remove();
};