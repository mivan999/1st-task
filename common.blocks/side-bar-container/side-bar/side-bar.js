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