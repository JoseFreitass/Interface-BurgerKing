function menuMobile(){
    var menu = document.getElementById("menu_mobile");
    var openMenu = document.getElementById("open_menu");
    if(menu.style.display === "flex"){
        menu.style.display = "none";    
        openMenu.style.right = "0px";    
    } else {
        menu.style.display = "flex";
        openMenu.style.right = "0px"; 
    }
}
