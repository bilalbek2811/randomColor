const glav = document.querySelector(".d-flex");
const boxes = document.querySelectorAll(".box");
glav.style.display = "flex";
glav.style.flexWrap = "wrap";
const colorNames = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];
// const name = ["Bilal", "Aikol", "rol"];

// boxes.forEach((box) => {
//   box.addEventListener("mouseover", () => {
//     boxes.forEach((clicke) => {
//       clicke.style.background = "none";
//     });
//     box.style.background = randomColor();
//     box.style.display = randomName();
//   });
// });

// boxes.forEach((box) => {
//   setInterval(() => {
//     boxes.forEach((clicke) => {
//       clicke.style.background = "none";
//     });
//     box.style.background = randomColor();
//     box.style.display = randomName();
//   }, 1000);
// });
// function randomColor() {
//   const idx = Math.floor(Math.random() * colorNames.length);
//   return colorNames[idx];
// }
// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     boxes.forEach((el) => {
//       el.style.background = "none";
//     });
//     // boxes.forEach(el => {
//     //     el.addEventListener("click", () => {
//     //         boxes.forEach( title => {
//     //             title.innerHTML = null
//     //         })
//     //         el.innerHTML = randomName()
//     //     })
//     // })
//     box.style.background = randomColor();
//     box.style.transition = ".4s";
//   });
// });

// function randomColor() {
//   const idx = Math.floor(Math.random() * colorNames.length);
//   return colorNames[idx];
// }

// function randomName() {
//   const idx = Math.floor(Math.random() * name.length);
//   return name[idx];
// }
// function randomColor() {
//   let res = "#";
//   for (let i = 0; i <= 6; i++) {
//     res += Math.floor(Math.random() * 10);
//   }
// }
// randomColor();
