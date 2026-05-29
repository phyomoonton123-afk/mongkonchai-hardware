let openMenu = false;

function showMenu() {
    let sidebar = document.getElementById("sidebar-menu");
    if (sidebar) {
        if (openMenu) {
            sidebar.style.left = "-250px";
            openMenu = false;
        } else {
            sidebar.style.left = "0";
            openMenu = true;
        }
    }
}

function closeMenu() {
    let sidebar = document.getElementById("sidebar-menu");
    if (sidebar) {
        sidebar.style.left = "-250px";
        openMenu = false;
    }
}