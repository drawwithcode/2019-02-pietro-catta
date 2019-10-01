var colorList = ["#bccad6", "#8d9db6", "#667292", "#f1e3dd", "#fbefcc", "#f9ccac", "#f4a688", "#e0876a"]
var colorElenco = ['#e86584', '#3c5979', '#018cb7', '#fae093'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("darkred");

  for (var x = 50; x < windowWidth - 50; x += 50) {
    for (var y = 50; y < windowHeight - 100; y += 50) {
      strokeWeight(5)
      stroke("darkred");


      if (x <= windowWidth / 2) {
        var index = floor(random() * colorList.length);
        var colorHex = colorList[index];
        fill(color(colorHex));
      } else if (x > windowWidth / 2) {
        var index = floor(random() * colorElenco.length);
        var colorHex = colorElenco[index];
        fill(color(colorHex));
      }

      quad(x, y, x, y + 100, x + 50, y, x + 50, y + 100)
    }
  }
}
