// function hideOverflowItems() {
//     // Ta biết trước rằng class nav-center chỉ có một
//     const navCenter = document.querySelector(".nav-center");
//     const navRight = document.querySelector(".nav-right");

//     if (!navCenter || !navRight) return;

//     const centerItems = Array.from(navCenter.children);
//     //  Lấy vị trí cạnh trái của nav-right
//     let navRightLeft = navRight.getBoundingClientRect().left;

//     // Không xét hai thẻ đầu tiên
//     for (let i = centerItems.length - 1; i >= 2; i--) {
//         let item = centerItems[i];
//         console.log(item);
        

//         // Lấy vị trí cạnh phải của item
//         let itemRight = item.getBoundingClientRect().right;
//         console.log(itemRight);
        
//         console.log(navRightLeft);
//         if (itemRight + 1 >= navRightLeft) {
//             item.style.display = "none"; // Ẩn nếu chạm vào nav-right
//         } else {
//             item.style.display = ""; // Hiện lại nếu không chạm
//         }
//     }
// }

// // Gọi khi tải trang & khi resize
// window.addEventListener("load", hideOverflowItems);
// window.addEventListener("resize", hideOverflowItems);


document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".nav__menu");
    const closeBtn = document.querySelector(".nav__close");
    const showBtn = document.querySelector(".nav__burger");
    const overlay = document.querySelector(".overlay");

    // Khi mở menu
    showBtn.addEventListener("click", () => {
        menu.classList.add("show");
        overlay.classList.add("active"); // Hiện overlay
    });

    // Khi đóng menu
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("show");
        overlay.classList.remove("active"); // Ẩn overlay
    });

    // Khi click vào overlay cũng đóng menu
    overlay.addEventListener("click", () => {
        menu.classList.remove("show");
        overlay.classList.remove("active");
    });
});


// Xóa text khi nhấn clear 
document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("search-input").value = "";
});

// Hiện subnav trong menu
document.addEventListener("DOMContentLoaded", () => {
    const newBtn = document.getElementById("new-btn");
    // console.log(newBtn);
    
    const subnavNew = document.getElementById("subnav-New");
    console.log(subnavNew);
    

    newBtn.addEventListener("click", () => {
        subnavNew.classList.toggle("show");
    });

    const discoverBtn = document.getElementById("discover-btn");
    const subnavDiscover = document.getElementById("subnav-Discover");

    discoverBtn.addEventListener("click", () => {
        subnavDiscover.classList.toggle("show");
    });

});