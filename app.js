const changebtn = document.querySelector(".change");
const code = document.querySelector(".color-code")

changebtn.addEventListener('click', function () {
    var hexcolor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    document.body.style.backgroundColor = hexcolor;
    code.innerText = "";
    code.append(hexcolor);
});