// Making the map fixed height
// document.getElementById("issMap").style.height = document

$(document).ready(function() {
  header_height = $(".header").height();
  footer_height = $(".footer").height();
  content_height = $(window).height() - header_height - footer_height;

  console.log(header_height);
  console.log(footer_height);

  $("#issMap").height(content_height);

  // Making a map and tiles
  const map = L.map('issMap').setView([46.807, 8.253], 8);
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(map);
})