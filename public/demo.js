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
  const translation = [21.492181378117138, 14.967948187849712, 0];
  imageURL = "/images/banner2.jpg";
  hotSpotDiv.tabIndex = -1;
  hotSpotDiv.dataType = "image";
  hotSpotDiv.dataTransform3d = "1";
  hotSpotDiv.classList.add("pnlm-hotspot-base", "hotspot-embed", "poi_embed");
  hotSpotDiv.dataset.transform3d = "1";
  hotSpotDiv.dataset.initialized = "1";
  hotSpotDiv.dataset.tooltip_visibility = "hover";
  hotSpotDiv.style.zIndex = "1";
  hotSpotDiv.style.visibility = "visible";
  hotSpotDiv.style.transform = `matrix3d(${translation.join(", ")}, 0, 0, 1)`;
  hotSpotDiv.style.transformOrigin = "0px 0px";
  hotSpotDiv.dataset.offscreen = "0";

  const img = document.createElement("img");
  img.draggable = false;
  img.src = imageURL;
  img.style.maxWidth = "100%";
  img.style.width = "200px";
  img.style.height = "200px";
  hotSpotDiv.appendChild(img);
}
