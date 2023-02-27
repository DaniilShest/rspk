// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// for (let smoothLink of smoothLinks) {
//     smoothLink.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = smoothLink.getAttribute('href');

//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// };

// When the user scrolls the page, execute myFunction
window.onscroll = function () { fixHeader() };

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
        document.getElementById("header-logo").src = "./img/logo-blk.svg"
        burger.classList.add("black")
    } else {
        header.classList.remove("fixed");
        if (!mobileMenu.classList.contains('open')) {
            document.getElementById("header-logo").src = "./img/logo-wht.svg"
            burger.classList.remove("black")
        }
    }
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        console.log(anchor.href)
        if (anchor.href.includes('#popup')) {
            return true
        }
        if (anchor.href.includes('#header')) {
            return true
        }
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        if (window.innerWidth <= 720) {
            if (!document.querySelector('footer').contains(anchor) && !anchor.classList.contains("main__btn")) {
                burger.classList.toggle("open")
                mobileMenu.classList.toggle("open")
                document.body.classList.toggle("lock")
            }
        }

        let blockValue = blockID === "contacts" || blockID === "about" ? "center" : "start"

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center"
        })
    })
}


const burger = document.querySelector(".burger")
const mobileMenu = document.querySelector(".mobile_menu")

burger.addEventListener("click", () => {
    if (!burger.classList.contains('black') || header.classList.contains("fixed")) {
        burger.classList.add("black")
    } else {
        burger.classList.remove("black")
    }
    if (!mobileMenu.classList.contains('open')) {
        document.getElementById("header-logo").src = "./img/logo-blk.svg"
    } else if (!header.classList.contains('fixed')) {
        document.getElementById("header-logo").src = "./img/logo-wht.svg"
    }
    burger.classList.toggle("open")
    mobileMenu.classList.toggle("open")
    document.body.classList.toggle("lock")
})

const checkbox = document.getElementById("checkbox")
const btn = document.getElementById("popup_btn")

checkbox.addEventListener("change", () => {
    if (btn.hasAttribute('disabled')) { btn.removeAttribute('disabled') }
    else { btn.setAttribute('disabled', true) }
})