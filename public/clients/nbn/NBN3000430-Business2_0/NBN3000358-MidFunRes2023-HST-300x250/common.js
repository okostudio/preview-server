/////////////////////////////////////////////////////////
//
// Listeners
//
/////////////////////////////////////////////////////////
function addListeners() {
    
    var clickthrough = document.querySelector(".clickthrough");
    clickthrough.addEventListener("click", onClickThrough);
    clickthrough.addEventListener("mouseover", onMouseOver);
    clickthrough.addEventListener("mouseout", onMouseLeave);
}

function onClickThrough() {
    console.log(">> Standard ClickThrough");
    window.open(window.clickTag);
    // Enabler.exitOverride("Default Clickthrough", banner.data.ClickThrough_URL.Url);
    // Enabler.exit("Default Clickthrough");
}

function onMouseOver() {
    
    gsap.fromTo("#cta-glow path", { drawSVG: "0% 0%" }, { duration: 0.4, drawSVG: "0% 100%", ease: Power2.easeInOut, stagger: 0.05 });
}
function onMouseLeave() {
    gsap.fromTo("#cta-glow path", { drawSVG: "0% 100%" }, { duration: 0.6, drawSVG: "100% 100%", ease: Power2.easeInOut, stagger: 0.05 });
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
// Image Preloader
//
/////////////////////////////////////////////////////////
function ImagePreloader(images, callback) {
    this.images = images;
    this.callback = callback;
    this.imagesLoaded = 0;
    this.imgArray = [];
    var THIS = this;
    this.images.map(function (image, i) {
        THIS.imgArray.push(THIS.loadImage(image));
    });
    return this.imgArray;
}

ImagePreloader.prototype.loadImage = function (src) {
    var THIS = this;
    var newImage = new Image();
    newImage.src = src;
    newImage.onload = function (e) {
        THIS.imagesLoaded++;
        if (THIS.imagesLoaded == THIS.images.length) {
            console.log(">> ALL IMAGES LOADED");
            THIS.callback();
        }
    };
    return newImage;
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
