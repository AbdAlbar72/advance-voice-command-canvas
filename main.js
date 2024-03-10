let screen_width = 0;
let screen_height = 0;
let apple = "";
let speak_data = "";
let to_number = "";


function preload() {
  apple = loadImage('path/to/apple_image.png');
}


recognition.onresult = function (event) {
  let content = event.results[0][0].transcript;
  to_number = Number(content);

  if (Number.isInteger(to_number)) {
    status = "Started drawing apple";
    draw_apple = "set";
  } else {
    text("The speech has not recognized a number", 20, 20);
  }
};

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;

  createCanvas(screen_width, screen_height - 150);
  canvas.position(0, 150);
}


function draw() {
  if (draw_apple === "set") {
    for (let i = 1; i <= to_number; i++) {
      let x = Math.floor(Math.random() * 700); 
      let y = Math.floor(Math.random() * 400); 

      image(apple, x, y, 50, 50); 
    }

    
    speak_data = to_number + " Apples drawn";
    speak();
  }
}
