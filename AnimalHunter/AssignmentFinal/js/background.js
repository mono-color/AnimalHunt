const backgrounds = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

function changeImg() {
  // if(document.body)

  const chosenImage =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];

  const bgImage = `images/${chosenImage}`;

  document.body.style.backgroundImage = 'url("' + bgImage + '")';
  document.body.style.backgroundSize = "cover";
}

setInterval(changeImg, 6000);
