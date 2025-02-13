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


//================ THANH TRƯỢT CONTENT 1 ==================
function scrollNews(direction) {
    const container = document.querySelector(".news-container");
    const scrollAmount = 320; // Điều chỉnh khoảng cách cuộn
    container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  }
  
// ================= SELECT TRONG CONTENT 2 =================
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các phần tử trong danh sách group
    const groupItems = document.querySelectorAll(".group li");
    const championImage = document.querySelector(".img-champion img");
    const championName = document.querySelector(".img-champion .name");
    const championDesc = document.querySelector(".img-champion .discrip");
  
    // Dữ liệu thông tin cho từng danh mục
    const championsData = {
      assassins: {
        img: "./assets/img/img-champion/Akali.avif",
        name: "Akali",
        desc: "The Rogue Assassin",
      },
      fighters: {
        img: "./assets/img/img-champion/Yasuo.avif",
        name: "Yasuo",
        desc: "The Unforgiven",
      },
      mages: {
        img: "./assets/img/img-champion/Lux.avif",
        name: "Lux",
        desc: "The Loose Cannon",
      },
      marksmen: {
        img: "./assets/img/img-champion/Jinx.avif",
        name: "Jinx",
        desc: "The Virtuoso",
      },
      supports: {
        img: "./assets/img/img-champion/Thresh.avif",
        name: "THRESH",
        desc: "The Chain Warden",
      },
      tanks: {
        img: "./assets/img/img-champion/Leona.avif",
        name: "Leona",
        desc: "The Radiant Dawn",
      },
    };
  
    // Lặp qua từng item và thêm sự kiện click
    groupItems.forEach((item) => {
      item.addEventListener("click", function () {
        const role = this.classList[0]; // Lấy class đầu tiên (assassins, fighters, ...)
        
        // Nếu có dữ liệu phù hợp, thay đổi thông tin hiển thị
        if (championsData[role]) {
          championImage.src = championsData[role].img;
          championName.textContent = championsData[role].name;
          championDesc.textContent = championsData[role].desc;
        }
      });
    });
  });
  

 //====================== SELECT TRONG CONTENT =============================
 document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");
    const videoElement = document.getElementById("main-video");
    const videoSource = document.getElementById("video-source");
    const titleElement = document.getElementById("video-title");
    const descElement = document.getElementById("video-desc");
  
    options.forEach(option => {
      option.addEventListener("click", function () {
        // Lấy thông tin từ data attributes
        const newVideo = this.getAttribute("data-video");
        const newTitle = this.getAttribute("data-title");
        const newDesc = this.getAttribute("data-desc");
  
        // Cập nhật video
        videoSource.src = newVideo;
        videoElement.load(); // Tải lại video mới
  
        // Cập nhật tiêu đề và mô tả
        titleElement.textContent = newTitle;
        descElement.textContent = newDesc;
      });
    });
  });
  
