// Making the map fixed height
// document.getElementById("issMap").style.height = document

var lat = 0;
var lon = 0;

$(document).ready(function() {
  header_height = $(".header").height();
  footer_height = $(".footer").height();
  content_height = $(window).height() - header_height - footer_height;

  console.log(header_height);
  console.log(footer_height);

  $("#issMap").height(content_height);

  // Making a map and tiles
  const map = L.map('issMap', {preferCanvas: true}).setView([46.807, 8.253], 8);
  const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(map);

  getFountains(map);

  var marker = L.marker([lon, lat]).addTo(map);
})

function getFountains(map) {
  $.getJSON("https://lumagician.github.io/wot-ah/public/fountains.geojson", function(data) {

    $.each(data.features, function(i, item) {

      lat = data.features[i].geometry.coordinates[0];
      lon = data.features[i].geometry.coordinates[1];

      var marker = L.circleMarker([lon, lat]).addTo(map);

    })
  })
}