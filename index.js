const buyBtns = document.querySelectorAll('.js-buy-ticket') 
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')


// Hàm hiển thị modal mua vé (thêm class open và modal)

function showBuyTickets() {
    modal.classList.add('open')
}

// Hàm ẩn modal mua vé (gỡ bỏ class vào modal)
function hideBuyTickets() {
    modal.classList.remove('open')
}



// Lặp qua từng thẻ button và nghe hành vi click 
for(const buyBtn of buyBtns) {
    // addEventListener thêm một thằng để lắng nghe 
    buyBtn.addEventListener('click', showBuyTickets)  // Trước dấu phẩy là tên hành vi sau dấu phẩy là cái hàm mà được gọi khi hành vi nó xảy ra

}



// Nghe hành vi click vào button close 
modalClose.addEventListener('click', hideBuyTickets )
 
modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', function(e) {
    e.stopPropagation()   // .stopPropagation là ngừng việc nổi bọt lại 
}) // Khi viết truyển thẳng function vào thì không cần đặt tên












// Code Javascritpt trên mobile --------------------------------

var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight; 

// Đóng mở mobile menu
mobileMenu.onclick = function() {
    // console.log(header.clientHeight) // Kiểm tra chiều cao của header 
    var isClosed = header.clientHeight === headerHeight; 
    if(isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}


// Tự động đóng khi chọn menu 
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function (e) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(isParentMenu) {
            e.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}


