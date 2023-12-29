viewer = pannellum.viewer("panorama", {
  type: "equirectangular",
  panorama: "/images/pana_3.jpg",
  hotSpots: [
    {
      pitch: 12,
      yaw: -2,
      cssClass: "custom-hotspot",
      createTooltipFunc: createDivShowImage,
      createTooltipArgs: "Div image",
      scale: true,
      transform3d: true,
    },
    {
      pitch: -9.4,
      yaw: 222.6,
      cssClass: "custom-hotspot",
      createTooltipFunc: hotspot,
      createTooltipArgs: "Open div 2",
    },
    {
      pitch: -0.9,
      yaw: 144.4,
      cssClass: "custom-hotspot",
      createTooltipFunc: createDivShowImage,
      createTooltipArgs: "Open div 3",
    },
  ],
});

viewer.on("mousedown", function (event) {
  console.log("mousedown", viewer.getPitch(), viewer.getYaw());
});
// Hot spot creation function
function hotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-tooltip");
  var span = document.createElement("span");
  span.innerHTML = args;
  hotSpotDiv.appendChild(span);
  span.style.width = span.scrollWidth - 20 + "px";
  span.style.marginLeft =
    -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
  span.style.marginTop = -span.scrollHeight - 12 + "px";
}

function createCustomDiv(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-div");
  var div = document.createElement("div");
  div.style.backgroundColor = "red";
  div.innerHTML = args;
  hotSpotDiv.appendChild(div);
}

// create div show image
function createDivShowImage(hotSpotDiv, args) {
  const img = document.createElement("img");
  img.src = "/images/banner2.jpg";
  [
    "pnlm-hotspot-bas",
    "hotspot-embed",
    "noselect",
    "poi_embed",
    "poi_embed_19016",
    "hotspot_19016",
    "poi_not_selectable",
  ].forEach((item) => {
    hotSpotDiv.classList.add(item);
  });

  hotSpotDiv.appendChild(img);
}
