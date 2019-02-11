let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
const mappaOptions = {
  lat: 30.743732,
  lng: 76.732676,
  zoom: 17,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

class MapLine {
  constructor(x0, y0) {
    this.x0 = x0;
    this.y0 = y0;
  }

  update(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(){
    line(this.x0, this.y0, this.x, this.y);
  }
}

let map_line;

function setup() {
  canvas = createCanvas(0.99 * window.innerWidth, 0.97 * window.innerHeight);
  myMap = mappa.tileMap(mappaOptions);
  myMap.overlay(canvas);
  myMap.onChange(drawRoad);
  strokeWeight(10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  if (!map_line) {
    map_line = new MapLine(mouseX, mouseY);
  } else if (map_line && map_line.x0) {
    map_line.update(mouseX, mouseY);
    map_line.draw();
    map_line = undefined;
  }
}

function drawRoad() {
  clear();
  const chandigarh = myMap.latLngToPixel(30.743732, 76.732676);
}
