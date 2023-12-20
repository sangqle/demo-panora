viewer = pannellum.viewer("panorama", {
  type: "equirectangular",
  panorama: "/images/bma-1.jpg",
  hotSpots: [
    {
      pitch: 14.1,
      yaw: 1.5,
      cssClass: "custom-hotspot",
      createTooltipFunc: createDivShowImage,
      createTooltipArgs: "Div image",
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

// create div show image
function createDivShowImage(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-tooltip");
  var div = document.createElement("div");
  div.innerHTML = args;
  hotSpotDiv.appendChild(div);
  div.style.width = 400 + "px";
  div.style.marginLeft = -(div.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
  div.style.marginTop = -div.scrollHeight - 12 + "px";
  div.innerHTML = `<img style="
    max-width: 100%;
    max-height: 100%;"
    src="https://cdn.tgdd.vn/Products/Images/42/307245/Slider/xiaomi-redmi-12-yt-1020x570-3.jpg" alt="image" />`;
}
