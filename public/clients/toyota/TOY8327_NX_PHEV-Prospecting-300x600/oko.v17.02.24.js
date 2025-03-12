/////////////////////////////////////////////////////////
//
// Listeners
//
/////////////////////////////////////////////////////////
function addListeners(_over, _out) {
  // console.log(">> LISTENERS ADDED");
  var clickthrough = document.querySelector(".clickthrough");
  clickthrough.addEventListener("click", onClickThrough);
  clickthrough.addEventListener("mouseover", _over);
  clickthrough.addEventListener("mouseout", _out);
}

function onClickThrough() {
  console.log(">> Standard ClickThrough");
  window.open(window.clickTag);

  // console.log(">> Studio 360 ClickThrough");
  // Enabler.exitOverride("Default Clickthrough", banner.data.ClickThrough_URL.Url);
  // Enabler.exit("Default Clickthrough");
}

/////////////////////////////////////////////////////////
//
// FauxRandom
//
/////////////////////////////////////////////////////////
var seed = 0;
const fauxArray = [0.7685, 0.2307, 0.7286, 0.2751, 0.7657, 0.1758, 0.0204, 0.3545, 0.273, 0.2182, 0.2469, 0.4282, 0.9801, 0.4047, 0.9599, 0.877, 0.447, 0.9755, 0.2954, 0.3758, 0.2503, 0.4617, 0.0681, 0.6567, 0.5259, 0.5646, 0.3489, 0.7782, 0.5468, 0.9295, 0.3419, 0.8539, 0.9412, 0.3457, 0.3737, 0.6433, 0.4962, 0.157, 0.061, 0.5278, 0.8022, 0.6694, 0.6408, 0.5654, 0.0814, 0.4807, 0.385, 0.4607, 0.8822, 0.3512, 0.4443, 0.6097, 0.9311, 0.6591, 0.5239, 0.6988, 0.7806, 0.4941, 0.6844, 0.2302, 0.1568, 0.5161, 0.0117, 0.2073, 0.3913, 0.0712, 0.3639, 0.0273, 0.3727, 0.835, 0.5993, 0.8479, 0.0684, 0.3027, 0.3051, 0.2314, 0.2408, 0.4156, 0.1594, 0.4166, 0.7596, 0.6082, 0.7352, 0.0752, 0.461, 0.1188, 0.2054, 0.3789, 0.3502, 0.7334, 0.0571, 0.2256, 0.9375, 0.2293, 0.8959, 0.2762, 0.9168, 0.6481, 0.4968, 0.9414, 0.3543, 0.0439, 0.5225, 0.472, 0.352, 0.6213, 0.4906, 0.635, 0.9802, 0.7814, 0.5887, 0.9992, 0.6631, 0.5691, 0.9452, 0.6585, 0.0611, 0.3946, 0.0401, 0.0177, 0.0002, 0.5008, 0.8204, 0.2036, 0.2341, 0.4408, 0.3937, 0.7174, 0.1775, 0.6535, 0.6595, 0.9139, 0.0395, 0.6299, 0.7274, 0.46, 0.2692, 0.6102, 0.5998, 0.9485, 0.9843, 0.0302, 0.865, 0.3383, 0.1314, 0.0274, 0.043, 0.4699, 0.9009, 0.0241, 0.5028, 0.7929, 0.1997, 0.2544, 0.8095, 0.9197, 0.9067, 0.8988, 0.2452, 0.9582, 0.2751, 0.3452, 0.7483, 0.6716, 0.8781, 0.0133, 0.1307, 0.4648, 0.8767, 0.7853, 0.8755, 0.4543, 0.3744, 0.7415, 0.552, 0.5145, 0.3573, 0.0514, 0.62, 0.0561, 0.3058, 0.583, 0.4516, 0.1483, 0.8132, 0.3312, 0.5533, 0.9523, 0.7909, 0.6563, 0.7254, 0.9053, 0.351, 0.5152, 0.9258, 0.9208, 0.2949, 0.1613, 0.5789, 0.7683, 0.5333, 0.4208, 0.9691, 0.4213, 0.8202, 0.3572, 0.3176, 0.289, 0.81, 0.2174, 0.1071, 0.2477, 0.8635, 0.98, 0.4617, 0.5503, 0.1161, 0.4302, 0.1713, 0.1415, 0.8574, 0.1579, 0.9465, 0.2735, 0.1646, 0.789, 0.3765, 0.0533, 0.0754, 0.2962, 0.7152, 0.5547, 0.9918, 0.3959, 0.192, 0.0048, 0.9034, 0.7402, 0.7492, 0.2635, 0.6608, 0.3338, 0.3177, 0.448, 0.8091, 0.9471, 0.582, 0.1102, 0.386, 0.7975, 0.1273, 0.8929, 0.1834, 0.1887, 0.8743, 0.6526, 0.223, 0.5268, 0.7775, 0.4543, 0.6105, 0.9931, 0.376, 0.2915, 0.524, 0.958, 0.3337, 0.5847, 0.0141, 0.3488, 0.7573, 0.3861, 0.1603, 0.5112, 0.4583, 0.7115, 0.417, 0.7227, 0.7193, 0.574, 0.2078, 0.8756, 0.1676, 0.4376, 0.8113, 0.1037, 0.815, 0.2324, 0.4765, 0.8105, 0.4504, 0.5879, 0.2835, 0.3603, 0.2316, 0.9268, 0.5461, 0.5143, 0.6011, 0.3399, 0.095, 0.059, 0.6722, 0.8845, 0.5901, 0.0954, 0.6847, 0.5342, 0.0567, 0.0782, 0.1089, 0.2887, 0.7019, 0.4739, 0.8465, 0.197, 0.2388, 0.4446, 0.1754, 0.6505, 0.8328, 0.2714, 0.0041, 0.2277, 0.2513, 0.1923, 0.2189, 0.7363, 0.0732, 0.9253, 0.8254, 0.7502, 0.2534, 0.0822, 0.6319, 0.935, 0.5188, 0.4674, 0.2905, 0.3558, 0.9765, 0.4184, 0.976, 0.7099, 0.8354, 0.7946, 0.0215, 0.5518, 0.4972, 0.1759, 0.8958, 0.801, 0.5372, 0.6671, 0.8804, 0.2087, 0.0464, 0.6706, 0.8043, 0.3838, 0.8886, 0.7703, 0.0403, 0.8444, 0.2166, 0.7179, 0.2058, 0.2928, 0.3188, 0.3824, 0.5096, 0.4887, 0.7398, 0.1348, 0.1666, 0.712, 0.3691, 0.176, 0.1076, 0.5131, 0.1871, 0.1408, 0.53, 0.9188, 0.6418, 0.5779, 0.3272, 0.669, 0.5834, 0.7466, 0.779, 0.0447, 0.2251, 0.4882, 0.7324, 0.6123, 0.9468, 0.6805, 0.9847, 0.4038, 0.7205, 0.9449, 0.0633, 0.3357, 0.8777, 0.4952, 0.1338, 0.4806, 0.6498, 0.5656, 0.2144, 0.6723, 0.3989, 0.4267, 0.7148, 0.5809, 0.1709, 0.9494, 0.0781, 0.2658, 0.0196, 0.0756, 0.3482, 0.6065, 0.766, 0.8056, 0.9128, 0.5112, 0.2979, 0.5493, 0.6236, 0.913, 0.506, 0.7498, 0.8029, 0.3118, 0.7541, 0.3497, 0.8195, 0.8978, 0.054, 0.7743, 0.6126, 0.5403, 0.5782, 0.8487, 0.2047, 0.3683, 0.3831, 0.2454, 0.3749, 0.7303, 0.3562, 0.7334, 0.3846, 0.2355, 0.4011, 0.9755, 0.3176, 0.3425, 0.1628, 0.0067, 0.6434, 0.4804, 0.0804, 0.0078, 0.5169, 0.6812, 0.4645, 0.3814, 0.2753, 0.0002, 0.5017, 0.9996, 0.1215, 0.9034, 0.187, 0.1834, 0.3894, 0.0413, 0.2607, 0.2052, 0.3161, 0.021, 0.0104, 0.5874, 0.8722, 0.5375, 0.1457, 0.6563, 0.2126, 0.7669, 0.7747, 0.3989, 0.3794, 0.1376, 0.8064, 0.4283, 0.8415, 0.4422, 0.0116, 0.5666, 0.7943, 0.1911, 0.711, 0.3695, 0.301, 0.014, 0.3644, 0.196, 0.5316, 0.1493, 0.1352, 0.7969, 0.2548, 0.6952, 0.4192, 0.6053, 0.137, 0.4442, 0.952, 0.4859, 0.4175, 0.1577, 0.2729, 0.7511, 0.1793, 0.86, 0.6339, 0.9007, 0.4934, 0.201, 0.7118, 0.9702, 0.8652, 0.9911, 0.9516, 0.8242, 0.9981, 0.1164, 0.3317, 0.5963, 0.0006, 0.0757, 0.8871, 0.4503, 0.621, 0.5684, 0.2479, 0.6901, 0.6984, 0.6059, 0.9527, 0.9055, 0.7858, 0.7209, 0.7014, 0.0498, 0.3714, 0.9599, 0.6758, 0.4839, 0.8575, 0.6289, 0.4931, 0.4224, 0.6558, 0.0197, 0.727, 0.4549, 0.7432, 0.948, 0.4712, 0.1522, 0.7588, 0.1476, 0.5986, 0.5479, 0.4035, 0.2348, 0.5438, 0.24, 0.7374, 0.8205, 0.7098, 0.9901, 0.2639, 0.1524, 0.9988, 0.8065, 0.7574, 0.3595, 0.7927, 0.6502, 0.1244, 0.6876, 0.3846, 0.7051, 0.8722, 0.4233, 0.6358, 0.2293, 0.5869, 0.3978, 0.362, 0.9765, 0.1804, 0.5054, 0.518, 0.5753, 0.1767, 0.7448, 0.9699, 0.4152, 0.5922, 0.2104, 0.7585, 0.7333, 0.7877, 0.9091, 0.9016, 0.564, 0.5173, 0.5652, 0.4053, 0.3458, 0.8414, 0.8003, 0.8208, 0.4659, 0.9929, 0.202, 0.2417, 0.4372, 0.9466, 0.1455, 0.3177, 0.1991, 0.4453, 0.0806, 0.5344, 0.8686, 0.1195, 0.904, 0.6747, 0.5151, 0.0126, 0.8149, 0.726, 0.0179, 0.0907, 0.4693, 0.6306, 0.818, 0.2263, 0.3511, 0.8976, 0.3555, 0.8587, 0.1121, 0.1636, 0.7183, 0.929, 0.5986, 0.4519, 0.4569, 0.2934, 0.6226, 0.0315, 0.2301, 0.2877, 0.4212, 0.6153, 0.1175, 0.6229, 0.1448, 0.4357, 0.6744, 0.5992, 0.9673, 0.236, 0.6963, 0.5232, 0.6934, 0.8912, 0.366, 0.0676, 0.3398, 0.8136, 0.828, 0.5798, 0.4104, 0.2884, 0.7999, 0.0571, 0.7285, 0.6548, 0.3414, 0.6671, 0.3735, 0.871, 0.2595, 0.354, 0.5399, 0.6547, 0.6972, 0.197, 0.0588, 0.631, 0.1769, 0.7409, 0.2916, 0.3391, 0.681, 0.4479, 0.5367, 0.3296, 0.229, 0.2276, 0.3038, 0.1515, 0.9045, 0.847, 0.0591, 0.9458, 0.8946, 0.5545, 0.9887, 0.9066, 0.8839, 0.6097, 0.9142, 0.747, 0.9223, 0.2432, 0.4736, 0.3464, 0.7363, 0.9456, 0.9416, 0.3785, 0.3857, 0.5767, 0.8266, 0.9209, 0.0052, 0.0535, 0.5046, 0.0376, 0.9024, 0.0352, 0.7838, 0.7304, 0.8118, 0.2156, 0.817, 0.236, 0.9279, 0.341, 0.8607, 0.418, 0.7649, 0.4953, 0.551, 0.444, 0.9546, 0.0992, 0.0049, 0.8746, 0.5942, 0.2079, 0.6077, 0.6483, 0.8137, 0.6036, 0.0528, 0.5494, 0.6609, 0.0845, 0.6646, 0.5466, 0.077, 0.1112, 0.1711, 0.2873, 0.1413, 0.0688, 0.1168, 0.424, 0.9009, 0.4669, 0.9976, 0.7218, 0.8919, 0.1972, 0.0619, 0.582, 0.8564, 0.9327, 0.2575, 0.6871, 0.3445, 0.7281, 0.5554, 0.2082, 0.7076, 0.9938, 0.6594, 0.4794, 0.6039, 0.6486, 0.1726, 0.3477, 0.7208, 0.1008, 0.9814, 0.8208, 0.3397, 0.764, 0.1, 0.2393, 0.0051, 0.9983, 0.0856, 0.6445, 0.231, 0.2384, 0.6421, 0.9393, 0.9166, 0.83, 0.2625, 0.3435, 0.3926, 0.5763, 0.4105, 0.7588, 0.7758, 0.7434, 0.576, 0.895, 0.2319, 0.6097, 0.6268, 0.7752, 0.3305, 0.9761, 0.3346, 0.3407, 0.6427, 0.5717, 0.3168, 0.1748, 0.1135, 0.1194, 0.3143, 0.1284, 0.6201, 0.4195, 0.4733, 0.0685, 0.5699, 0.014, 0.2664, 0.5655, 0.0054, 0.2863, 0.7514, 0.5942, 0.9683, 0.9272, 0.9745, 0.1588, 0.8662, 0.0266, 0.205, 0.9751, 0.9901, 0.9718, 0.0298, 0.8991, 0.1628, 0.0882, 0.0413, 0.4956, 0.3483, 0.1658, 0.7537, 0.9017, 0.0295, 0.0051, 0.9998, 0.8563, 0.7968, 0.8915, 0.5082, 0.7596, 0.266, 0.2535, 0.8152, 0.1917, 0.5871, 0.7393, 0.2864, 0.7009, 0.9918, 0.7667, 0.9107, 0.3904, 0.8527, 0.1547, 0.1403, 0.6942, 0.7053, 0.8655, 0.3394, 0.943, 0.9744, 0.6959, 0.8185, 0.3763, 0.3584, 0.7368, 0.0793, 0.8921, 0.5293
];

const setSeed = (n) => {
  n = Math.abs(n);
  n %= fauxArray.length;
  seed = n;
};

const FauxRandom = (n) => {
  n ? setSeed(n) : setSeed(seed + 1);
  return fauxArray[seed];
  // return Math.random();
}

/////////////////////////////////////////////////////////
//
// Polyfills
//
/////////////////////////////////////////////////////////
ArrayFrom = function (list) {
  var array = [];
  for (i = 0; i < list.length; i++) {
    array.push(list[i]);
  }
  return array;
};

/////////////////////////////////////////////////////////
//
// META DATA EXTRACTOR
//
/////////////////////////////////////////////////////////
// returns an object with width & height of banner.
function getAdSizeMeta() {
  var content;
  var metaTags = document.getElementsByTagName("meta");
  ArrayFrom(metaTags).map(function (meta) {
    if (meta.name == "ad.size") {
      content = meta.content.split(",");
    }
  });
  var size = {
    width: parseInt(content[0].substring(6)),
    height: parseInt(content[1].substring(7)),
  };
  return size;
}


function enableTerms() {
  var termsOpen = false;
  var termsButton = document.querySelector(".terms-button");
  var termsPanel = document.querySelector(".terms-panel");
  // var termsClose = document.querySelector(".terms-close");

  function toggleTerms() {
    cancelTimer();
    if (termsOpen) {
      gsap.to(termsPanel, { y: "0", duration: 0.4, display: "none", ease: Power2.easeIn });
      gsap.to(termsButton, { y: "0", duration: 0.3, display: "block", ease: Power2.easeOut });
    } else {
      gsap.to(termsButton, { y: "100%", duration: 0.3, display: "none", ease: Power2.easeIn });
      gsap.to(termsPanel, { y: "-100%", duration: 0.4, display: "block", ease: Power2.easeOut });
    }
    termsOpen = !termsOpen;
  }

  var termsTimer;
  function cancelTimer() {
    clearTimeout(termsTimer)
  }
  function termsOver() {
    termsTimer = setTimeout(toggleTerms, 500)
  }

  termsButton.addEventListener("click", toggleTerms);
  termsButton.addEventListener("mouseenter", termsOver)
  termsButton.addEventListener("mouseleave", cancelTimer)
  termsPanel.addEventListener("click", toggleTerms);
}

// SET BANNER SIZE --------------------------------------------
function setBannerSize() {
  // check banner exists.
  if (!window.hasOwnProperty("banner")) window.banner = {};

  banner.width = getAdSizeMeta().width;
  banner.height = getAdSizeMeta().height;
  document.querySelector(".banner").style.width = banner.width + "px";
  document.querySelector(".banner").style.height = banner.height + "px";
  document.title = getAdSizeMeta().width + "x" + getAdSizeMeta().height;
}

///////////////////////////////////////////////////
//
//  Helpers
//
///////////////////////////////////////////////////
function randomRange(n) {
  return Math.random() * n - n * 0.5;
}


function splitText(target) {
  var copy = document.querySelectorAll(target ? target : ".copy");
  copy.forEach((textBlock) => {
    let html = "";
    console.log(textBlock)
    const lines = textBlock.innerHTML.trim().split("<br>")
    lines.forEach((line, i) => {
      html += `<div class="line-overflow"><div class='line line${i}'>`
      const words = line.trim().split(" ")
      words.forEach((word, i) => {
        html += `<span class='word word${i}'>`
        // bolded text
        if (word.indexOf("_") > -1) {
          html += "<strong>" + word.split("_")[1] + "</strong>"
        } else if (word.indexOf("+ORC") > -1) {
          html += "<span class='small'>+ ORC</span>"
        } else {
          html += word
        }
        // const letters = word.trim().split("")
        // letters.forEach((letter) => {
        //   html += `<span class='letter'>${letter}</span>`
        // })
        html += `</span>${i < words.length - 1 ? "&nbsp;" : ""}`
      })
      html += "</div></div>"
      //if (i < lines.length - 1) html += "<br>"
    })
    textBlock.innerHTML = html;
  })
}


// ==============================
//
// CANVAS SPRITES
// & Particle Systems
//
// ==============================
// ==============================
//
// CANVAS SPRITES
// & Particle Systems
//
// ==============================
function newCanvas(config) {
  const _canvas = document.createElement('canvas');
  _canvas.width = (config && config.width) ? config.width : banner.width * 2;
  _canvas.height = (config && config.height) ? config.height : banner.height * 2;
  const _ctx = _canvas.getContext('2d');
  const _sprite = newSprite(_canvas, (config && config.ctx) ? config.ctx : banner.ctx, (config && config.parent) ? config.parent : null, { width: _canvas.width, height: _canvas.height })
  _sprite.x = (config && config.x) ? config.x : banner.canvas.width * 0.5
  _sprite.y = (config && config.y) ? config.y : banner.canvas.height * 0.5
  _sprite.scaleX = (config && config.scaleX) ? config.scaleX : null
  _sprite.scaleY = (config && config.scaleY) ? config.scaleY : null
  _sprite.scale = (config && config.scale) ? config.scale : 1
  return {
    canvas: _canvas,
    ctx: _ctx,
    sprite: _sprite
  }
}

// 
//
// IMAGE  / CNAVAS SPRITE
//
const newSprite = (imageElement, targetContext, parentCanvas, spriteSheet, spriteVars) => {

  var imgEl = imageElement.length ? document.querySelector(imageElement) : imageElement;

  return {
    img: {
      x: (spriteSheet && spriteSheet.x) ? spriteSheet.x : 0,
      y: (spriteSheet && spriteSheet.y) ? spriteSheet.y : 0,
      width: (spriteSheet && spriteSheet.width) ? spriteSheet.width : imgEl.naturalWidth,
      height: (spriteSheet && spriteSheet.height) ? spriteSheet.height : imgEl.naturalHeight,
      src: imgEl
    },
    offset: { x: 0, y: 0, rotation: 0, scale: 1 },
    x: (spriteVars && spriteVars.x) ? spriteVars.x : 0,
    y: (spriteVars && spriteVars.y) ? spriteVars.y : 0,
    alpha: (spriteVars && spriteVars.alpha) ? spriteVars.alpha : 1,
    rotation: (spriteVars && spriteVars.rotation) ? spriteVars.rotation : 0,
    scale: (spriteVars && spriteVars.scale) ? spriteVars.scale : 1,
    scaleX: (spriteVars && spriteVars.scaleX) ? spriteVars.scaleX : null,
    scaleY: (spriteVars && spriteVars.scaleY) ? spriteVars.scaleY : null,
    isHidden: false,
    ctx: targetContext,
    parent: parentCanvas ? parentCanvas : null
  };
};

// 
//
// SVG SPRITE
//
const newSVGSprite = (path, targetContext, spriteVars) => {

  return {
    isSVG: true,
    path: path.path,
    width: path.width,
    height: path.height,
    fill: path.fill ? path.fill : "#ff0000",
    // 
    offset: { x: 0, y: 0, rotation: 0, scale: 1 },
    x: (spriteVars && spriteVars.x) ? spriteVars.x : 0,
    y: (spriteVars && spriteVars.y) ? spriteVars.y : 0,
    alpha: (spriteVars && spriteVars.alpha) ? spriteVars.alpha : 1,
    rotation: (spriteVars && spriteVars.rotation) ? spriteVars.rotation : 0,
    scale: (spriteVars && spriteVars.scale) ? spriteVars.scale : 1,
    scaleX: (spriteVars && spriteVars.scaleX) ? spriteVars.scaleX : null,
    scaleY: (spriteVars && spriteVars.scaleY) ? spriteVars.scaleY : null,
    anchorX: (spriteVars && spriteVars.anchorX) ? spriteVars.anchorX : 0,
    anchorY: (spriteVars && spriteVars.anchorY) ? spriteVars.anchorY : 0,
    isHidden: false,
    ctx: targetContext
  };
};


const drawSprite = (p, _ctx) => {
  if (p && !p.isHidden) {
    const ctx = _ctx ? _ctx : p.ctx;
    ctx.translate(
      p.x + p.offset.x,
      p.y + p.offset.y
    );
    ctx.globalAlpha = p.alpha;
    ctx.rotate(p.rotation + p.offset.rotation);

    if (p.isSVG) {
      const scale = p.scale * p.offset.scale;
      const matrix = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix()
      const path = new Path2D()
      const transform = matrix.scale(scale)
      path.addPath(new Path2D(p.path), transform)
      ctx.translate(
        (p.width * (-0.5 + p.anchorX)) * scale,
        (p.height * (-0.5 + p.anchorY)) * scale
      )
      ctx.fillStyle = p.fill
      ctx.fill(path)
      ctx.translate(
        (p.width * (0.5 - p.anchorX)) * scale,
        (p.height * (0.5 - p.anchorY)) * scale
      )
    } else if (p.scaleX || p.scaleX) {
      ctx.drawImage(
        // Source image element
        p.img.src,
        p.img.x,
        p.img.y,
        p.img.width,
        p.img.height,
        p.img.width * -0.5 * p.scaleX * p.offset.scale,
        p.img.height * -0.5 * p.scaleY * p.offset.scale,
        p.img.width * p.scaleX * p.offset.scale,
        p.img.height * p.scaleY * p.offset.scale
      );
    } else {
      ctx.drawImage(
        // Source image element
        p.img.src,
        p.img.x,
        p.img.y,
        p.img.width,
        p.img.height,
        p.img.width * -0.5 * p.scale * p.offset.scale,
        p.img.height * -0.5 * p.scale * p.offset.scale,
        p.img.width * p.scale * p.offset.scale,
        p.img.height * p.scale * p.offset.scale
      );
    }
    ctx.rotate(-p.rotation - p.offset.rotation);
    ctx.translate(
      -p.x - p.offset.x,
      -p.y - p.offset.y
    );
  }
};

// Cernter Sprites
const centerSprite = (sprite, parentCanvas) => {
  const _parent = parentCanvas ? parentCanvas : sprite.parent
  sprite.x = _parent.width * 0.5
  sprite.y = _parent.height * 0.5
}



function initParticles() {
  var config = {
    count: 150
  }

  var _particles = []
  for (i = 0; i < config.count; ++i) {
    var particle = newSprite(".particle")
    particle.x = 100 + (Math.random() * 400);
    particle.y = 150 + Math.random() * 400;
    particle.scale = 0.1 + Math.random() * 0.4;
    particle.alpha = 0.15 + Math.random() * 0.5;
    // particle.rotation = Math.random() * Math.PI * 2;

    _particles.push(particle);
  }
  return _particles;
}
// END PARTICLE SYSTEMS ---------------

