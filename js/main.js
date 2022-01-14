let barsIcon = document.querySelector("header .container nav i");
let links = document.querySelectorAll("header .container nav ul li");
let sections = document.querySelectorAll("section");
links.forEach(function (link) {
  link.onclick = () => {
    sections.forEach((section) => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link.className = "active";
      section.style.display = "none";
      if (section.getAttribute("class") == link.getAttribute("id")) {
        section.style.display = "block";
      }
    });
  };
});
barsIcon.onclick = function () {
  let menuLinksParent = document.createElement("ul");
  links.forEach((link) => {
    let newLink = document.createElement("li");
    newLink.appendChild(document.createTextNode(link.textContent));
    newLink.style.cssText = `
      color:#131313;
      cursor:pointer;
      font-weight:700;
      letter-spacing:1px;
      margin:10px 0;
      transition:0.3s;
      width:fit-content;
      width:-moz-fit-content;
      user-select:none`;
    newLink.onmouseover = function () {
      newLink.style.color = "#b50717";
      newLink.style.paddingLeft = "10px";
    };
    newLink.onmouseout = function () {
      newLink.style.color = "#131313";
      newLink.style.paddingLeft = "0px";
    };
    menuLinksParent.appendChild(newLink);
    menuLinksParent.style.cssText = `position:fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background-color:#fff;
      padding:50px 20px 20px;
      transition:0.3s;
      transform:translateX(-120%);
      z-index:1000`;
    setTimeout(function () {
      menuLinksParent.style.transform = "translateX(0px)";
    }, 1);
    document.body.appendChild(menuLinksParent);
    newLink.onclick = () => {
      sections.forEach((section) => {
        section.style.display = "none";
        if (section.getAttribute("class") == link.getAttribute("id")) {
          section.style.display = "block";
          removeMenu()
        }
      });
    };
  });

  let icon = document.createElement("i");
  icon.classList.add("far", "fa-times");
  icon.style.cssText = `position:absolute;
    right:35px;
    top:36px;
    font-size:1.5em;
    color:#131313;
    transition:0.3s;
    cursor:pointer`;
  icon.onmouseover = function () {
    icon.style.color = "#b50717";
  };
  icon.onmouseout = function () {
    icon.style.color = "#131313";
  };
  menuLinksParent.appendChild(icon);
  icon.onclick = removeMenu;
  function removeMenu() {
    menuLinksParent.style.transform = "translateX(-120%)";
    setTimeout(function () {
      menuLinksParent.remove();
    }, 320);
  }
};

let mobileMedia = window.matchMedia("(max-width: 575px)"),
  mobilelandScapeMedia = window.matchMedia("(max-width: 767px)"),
  tabletMedia = window.matchMedia("(max-width: 991px)"),
  mediumMedia = window.matchMedia("(max-width: 1199px)"),
  largeMedia = window.matchMedia("(min-width: 1200px)");

let newBoxs = document.querySelectorAll(
  ".landing .container .news-container .new"
);
window.onresize = checkNewsMedia;
function checkNewsMedia() {
  if (mobilelandScapeMedia.matches) {
    newBoxs.forEach((newBox) => {
      newBox.className = "new";
      newBox.classList.add("col-12");
    });
  } else if (tabletMedia.matches) {
    for (let i = 0; i < newBoxs.length; i++) {
      const newBox = newBoxs[i];
      if (i < 1) {
        newBox.className = "new";
        newBox.classList.add("col-12");
      } else {
        newBox.className = "new";
        newBox.classList.add("col-6");
      }
    }
  } else {
    for (let i = 0; i < newBoxs.length; i++) {
      const newBox = newBoxs[i];
      if (i < 2) {
        newBox.className = "new";
        newBox.classList.add("col-6");
      } else {
        newBox.className = "new";
        newBox.classList.add("col-4");
      }
    }
  }
}
checkNewsMedia();
newBoxs.forEach((box) => {
  let btn = box.children[1].children[2];
  btn.onclick = function () {
    let overlay = document.createElement("div");
    overlay.style.cssText = `
      position:fixed;
      top:0%;
      left:0%;
      width:100%;
      height:100%;
      background-color:rgba(0,0,0,0.4);
      z-index:9;`;
    let textBox = document.createElement("div");
    if (tabletMedia.matches) {
      textBox.style.cssText = `position:fixed;
        overflow:auto;
        top:-100%;
        left:0%;
        width:100%;
        height:100%;
        background-color:#fff;
        padding:30px;
        z-index:10;
        transition:0.3s;`;
      setTimeout(() => {
        textBox.style.cssText = `
          position:fixed;
          overflow:auto;
          top:0%;
          left:0%;
          width:100%;
          height:100%;
          background-color:#fff;
          padding:30px;
          z-index:10;
          transition:0.3s;`;
      }, 1);
    } else {
      textBox.style.cssText = `
        position:fixed;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:85%;
        height:80%;
        background-color:#fff;
        border-radius:10px;
        padding:30px;
        z-index:10;
        overflow:auto;`;
    }
    let textParagraph = document.createElement("p");
    let heading = document.createElement("h3");
    heading.appendChild(
      document.createTextNode(box.children[1].children[1].innerText)
    );
    heading.style.cssText = `
      margin-bottom: 20px;
      font-size: 24px;
      position:relative;
      width: calc(100% - 25px);
      line-height:1.6`;
    textBox.appendChild(heading);
    let dateSpan = document.createElement("span");
    dateSpan.appendChild(document.createTextNode("10/1/2022"));
    heading.appendChild(dateSpan);
    dateSpan.style.cssText = `
      position: absolute;
      bottom: -25px;
      color: rgb(191, 191, 191);
      font-size: 20px;
      left: 0;`;
    textParagraph.style.cssText = "color:#b50717;line-height:1.7";
    checkFontMedia();
    window.onresize = checkFontMedia;
    function checkFontMedia() {
      if (mediumMedia.matches) {
        textParagraph.style.fontSize = "20px";
      } else if (largeMedia.matches) {
        textParagraph.style.fontSize = "22px";
      }
    }
    textParagraph.appendChild(
      document.createTextNode(box.getAttribute("data-new"))
    );
    let icon = document.createElement("i");
    icon.style.cssText = `position:absolute;
      right:35px;
      top:36px;
      font-size:1.5em;
      color:#131313;
      transition:0.3s;
      cursor:pointer`;
    icon.onmouseover = function () {
      icon.style.color = "#b50717";
    };
    icon.onmouseout = function () {
      icon.style.color = "#131313";
    };
    icon.classList.add("far", "fa-times");
    textBox.appendChild(icon);
    textBox.appendChild(textParagraph);
    if (!tabletMedia.matches) {
      document.body.appendChild(overlay);
    }
    document.body.appendChild(textBox);
    icon.onclick = function () {
      if (!tabletMedia.matches) {
        textBox.remove();
        overlay.remove();
      } else {
        textBox.style.cssText = `
          position:fixed;
          overflow:auto;
          top:-100%; 
          left:0%;
          width:100%;
          height:100%;
          background-color:#fff;
          padding:30px;
          z-index:10;
          transition:0.3s;`;
        setTimeout(() => {
          textBox.remove();
        }, 320);
      }
    };
  };
});
