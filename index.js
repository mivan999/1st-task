window.onscroll = setHeaderStyle;
window.onresize = setHeaderStyle;
function setHeaderStyle() {
    let isScroll =
        document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;

    if (window.matchMedia("(max-width: 320px)").matches) {
        if (isScroll) {
            document.getElementById("header__label").style.display = "none";
            document.getElementById("header").style.paddingLeft = "68px";
            document.getElementById("header").style.paddingBottom =
                "27px";
            document.getElementById("header").style.paddingRight =
                "21px";
            document.getElementById(
                "sideContainerInputSearchIcon"
            ).style.backgroundImage = "none";
            document.getElementById("sideContainerInputSearchIcon").style.padding =
                "12px 16px";
        } else {
            document.getElementById("header__label").style.display = "block";
            document.getElementById("header__label").style.textAlign = "right";
            document.getElementById("header").style.paddingTop = "26px";
            document.getElementById("header").style.paddingRight =
                "21px";
            document.getElementById("header").style.paddingBottom =
                "27px";
            document.getElementById("header").style.paddingLeft = "20px";
            document.getElementById(
                "sideContainerInputSearchIcon"
            ).style.backgroundImage = null;
            document.getElementById(
                "sideContainerInputSearchIcon"
            ).style.padding = null;
        }
    } else if (window.matchMedia("(max-width: 768px)").matches) {
        if (isScroll) {
            document.getElementById("header__label").style.display = "none";
            document.getElementById("header").style.paddingLeft = "77px";
            document.getElementById("header").style.paddingBottom =
                "27px";
            document.getElementById("header").style.paddingRight =
                "27px";
        } else {
            document.getElementById("header__label").style.display = "block";
            document.getElementById("header__label").style.textAlign = "right";
            document.getElementById("header").style.paddingLeft = "26px";
            document.getElementById("header").style.paddingBottom =
                "27px";
            document.getElementById("header").style.paddingRight =
                "27px";
        }
    } else {
        if (isScroll) {
            document.getElementById("header__label").style.display = "none";
            document.getElementById("header").style.paddingLeft = "60px";
            document.getElementById("header").style.paddingBottom =
                "40px";
            document.getElementById("header").style.paddingRight =
                "60px";
        } else {
            document.getElementById("header__label").style.display = "block";
            document.getElementById("header__label").style.textAlign = "left";
            document.getElementById("header").style.paddingLeft = "60px";
            document.getElementById("header").style.paddingBottom =
                "40px";
            document.getElementById("header").style.paddingRight =
                "60px";
        }
    }
}
function sideBarExpand() {
    if (document.getElementById("sideBarToggle").checked) {
        if (window.matchMedia("(max-width: 320px)").matches) {
            document.getElementById("sideBar").style.width = "192px";
            document.getElementById("sideBar__Header").style.display = "inherit";
            document.getElementById("sideBar__HeaderLogo").style.display = "block";
            document.getElementById("sideBar__HeaderImg").style.display = "block";
            document.getElementById("sideBar__Category_Label_Catalog").style.display =
                "block";
            document.getElementById("sideBar__Category_Label_Health").style.display =
                "block";
            document.getElementById("sideBar__Category_Label_Beauty").style.display =
                "block";
            document.getElementById("sideBar__Category_Label_Joy").style.display =
                "block";
            document.getElementById("sideBar__Category_Label_Auto").style.display =
                "block";
        } else {
            document.getElementById("sideBar").style.width = "240px";
            document.getElementById("sideBar__HeaderLogo").style.display = "block";
            document.getElementById("sideBar__Category_Label_Catalog").style.display =
                "block";
            document.getElementById("sideBar__Category_Label_Health").style.display =
                "block";
            document.getElementById("sideBar__Category_Label_Beauty").style.display =
                "block";
            document.getElementById("sideBar__Category_Label_Joy").style.display =
                "block";
            document.getElementById("sideBar__Category_Label_Auto").style.display =
                "block";
        }
    } else {
        document.getElementById("sideBar__Header").style.display = null;
        document.getElementById("sideBar").style = null;
        document.getElementById("sideBar__HeaderImg").style = null;
        document.getElementById("sideBar__HeaderLogo").style = null;
        document.getElementById("sideBar__Category_Label_Catalog").style = null;
        document.getElementById("sideBar__Category_Label_Health").style = null;
        document.getElementById("sideBar__Category_Label_Beauty").style = null;
        document.getElementById("sideBar__Category_Label_Joy").style = null;
        document.getElementById("sideBar__Category_Label_Auto").style = null;
    }
}