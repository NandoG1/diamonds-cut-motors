

const last = window.matchMedia("(max-width:710px)")

function lastmatch(){
    if(last.matches){
        document.getElementById("main-bottom-container").innerHTML = `
                    <div class="main-bottom-header">
                        <p>OUR ROOM <span>GALLERY</span></p>
                        <div></div>
                    </div>
                    <p class="clicking" id="clicking-111">Click the <span>image</span> to see details</p>
                
                        <div class="img-main-content">
                            <div>
                                <img src="../Asset/ShowRoom Page/room-5.jpg" alt="" id="bottom-1">
                            </div>
                            <div class="detail-phone" id="detail-phone-1">
                                <p class="detail-header transisition" id="detail-header"><span>Main</span> Display Rooms</p>
                                <p class="detail-detail transisition" id="detail-detail">The main display area is the centerpiece of a luxury car showroom,  it aims to create an unforgettable first impression and provide customers with an immersive experience as they explore the vehicles. Our main display rooms are a testament to modern elegance, featuring high ceilings, expansive windows, and a seamless blend of contemporary and classic design elements</p>
                                <p class="detail-visit transisition" id="detail-visit">Visit Us</p>
                                <p class="detail-detail transisition" id="detail-detail-visit">We invite you to visit the Diamond Cut Motors showroom and experience the pinnacle of luxury automotive design and service. Whether you are a returning customer or new to our brand, we are committed to making your visit exceptional.</p>
                                <a href="Login.html"><button class="detail-join" id="detail-join">Join Now!</button></a>
                            </div>
                            <div>
                                <img src="../Asset/ShowRoom Page/pexels-maria-geller-801267-2127031 (4).jpg" alt="" id="bottom-2">
                            </div>
                            <div class="detail-phone" id="detail-phone-2">
                                <p class="detail-header transisition" id="detail-header"><span>Private</span> Viewing Rooms</p>
                                <p class="detail-detail transisition" id="detail-detail">The private viewing room is a dedicated space within a luxury car showroom designed to offer customers an exclusive and personalized experience when viewing and discussing specific vehicles. Our Private Viewing Room offers an intimate and luxurious setting, away from the main showroom floor. The room is adorned with plush furnishings, elegant decor, and soft lighting.</p>
                                <p class="detail-visit transisition" id="detail-visit">Visit Us</p>
                                <p class="detail-detail transisition" id="detail-detail-visit">We invite you to visit the Diamond Cut Motors showroom and experience the pinnacle of luxury automotive design and service. Whether you are a returning customer or new to our brand, we are committed to making your visit exceptional.</p>
                                <a href="Login.html"><button class="detail-join" id="detail-join">Join Now!</button></a>
                            </div>
                            <div>
                                <img src="../Asset/ShowRoom Page/room-3.jpg" alt="" id="bottom-3">
                            </div>
                            <div class="detail-phone" id="detail-phone-3">
                                <p class="detail-header transisition" id="detail-header"><span>Lexus</span> Display Room +</p>
                                <p class="detail-detail transisition" id="detail-detail">Our display room is designed to offer an exceptional experience. The Lexus display room is designed to showcase the brand's latest models and key features in a sophisticated and inviting environment. This area aims to create a premium customer experience, reflecting the elegance and innovation associated with the Lexus brand.</p>
                                <p class="detail-visit transisition" id="detail-visit">Visit Us</p>
                                <p class="detail-detail transisition" id="detail-detail-visit">We invite you to visit the Diamond Cut Motors showroom and experience the pinnacle of luxury automotive design and service. Whether you are a returning customer or new to our brand, we are committed to making your visit exceptional.</p>
                                <a href="Login.html"><button class="detail-join" id="detail-join">Join Now!</button></a>
                            </div>
                            <div>
                                <img src="../Asset/ShowRoom Page/room.webp" alt="" id="bottom-4">
                            </div>
                            <div class="detail-phone" id="detail-phone-4">
                                <p class="detail-header transisition" id="detail-header"><span>Luxury</span> Car Rooms</p>
                                <p class="detail-detail transisition" id="detail-detail">The luxury car showroom is designed to provide an immersive and exclusive experience. Each area is carefully crafted to enhance the customer journey, from the initial greeting at the reception area to the final handover in the delivery bay. Upon entering, you will be greeted by your personal automotive consultant, dedicated to providing you with an unparalleled level of service.</p>
                                <p class="detail-visit transisition" id="detail-visit">Visit Us</p>
                                <p class="detail-detail transisition" id="detail-detail-visit">We invite you to visit the Diamond Cut Motors showroom and experience the pinnacle of luxury automotive design and service. Whether you are a returning customer or new to our brand, we are committed to making your visit exceptional.</p>
                                <a href="Login.html"><button class="detail-join" id="detail-join">Join Now!</button></a>
                            </div>
                            <div>
                                <img src="../Asset/ShowRoom Page/room-2.webp" alt="" id="bottom-5">
                            </div>
                            <div class="detail-phone" id="detail-phone-5">
                                <p class="detail-header transisition" id="detail-header"><span>VIP</span> Rooms</p>
                                <p class="detail-detail transisition" id="detail-detail">The VIP Rooms exude an atmosphere of elegance and exclusivity. The VIP room is designed to offer an exclusive, luxurious, and personalized experience for high-profile clients. It provides a private, comfortable, and sophisticated environment where clients can view vehicles, discuss details, and make decisions in a serene and opulent setting.</p>
                                <p class="detail-visit transisition" id="detail-visit">Visit Us</p>
                                <p class="detail-detail transisition" id="detail-detail-visit">We invite you to visit the Diamond Cut Motors showroom and experience the pinnacle of luxury automotive design and service. Whether you are a returning customer or new to our brand, we are committed to making your visit exceptional.</p>
                                <a href="Login.html"><button class="detail-join ada" id="detail-join">Join Now!</button></a>
                            </div>
                            <div>
                                <img src="../Asset/ShowRoom Page/room-4 (1).jpg" alt="" id="bottom-6">
                            </div>
                            <div class="detail-phone" id="detail-phone-6">
                                <p class="detail-header transisition" id="detail-header"><span>Ancient</span> Car Rooms</p>
                                <p class="detail-detail transisition" id="detail-detail">The Lexus display room is designed to showcase the brand's latest models and key features in a sophisticated and inviting environment. This area aims to create a premium customer experience, reflecting the elegance and innovation associated with the Lexus brand.</p>
                                <p class="detail-visit transisition" id="detail-visit">Visit Us</p>
                                <p class="detail-detail transisition" id="detail-detail-visit">We invite you to visit the Diamond Cut Motors showroom and experience the pinnacle of luxury automotive design and service. Whether you are a returning customer or new to our brand, we are committed to making your visit exceptional.</p>
                                <a href="Login.html"><button class="detail-join" id="detail-join">Join Now!</button></a>
                            </div>
                        </div>
        `
        document.getElementById("bottom-1").addEventListener("click", function(){
            document.getElementById("detail-phone-1").classList.toggle("popup")
        })
        document.getElementById("bottom-2").addEventListener("click", function(){
            document.getElementById("detail-phone-2").classList.toggle("popup")
        })
        document.getElementById("bottom-3").addEventListener("click", function(){
            document.getElementById("detail-phone-3").classList.toggle("popup")
        })
        document.getElementById("bottom-4").addEventListener("click", function(){
            document.getElementById("detail-phone-4").classList.toggle("popup")
        })
        document.getElementById("bottom-5").addEventListener("click", function(){
            document.getElementById("detail-phone-5").classList.toggle("popup")
        })
        document.getElementById("bottom-6").addEventListener("click", function(){
            document.getElementById("detail-phone-6").classList.toggle("popup")
        })
    }
    else{
        document.getElementById("main-bottom-container").innerHTML = `
                    <div class="main-bottom-header">
                        <p>OUR ROOM <span>GALLERY</span></p>
                        <div></div>
                    </div>
                    <div class="main-bottom-content" id="main-bottom-content">
                        <div class="text-main-content">
                            <div class="sticky-1">
                                <p class="clicking" id="clicking">Click the <span>image</span> to see details</p>
                                <p class="detail-header transisition" id="detail-header"></p>
                                <p class="detail-detail transisition" id="detail-detail"></p>
                                <p class="detail-visit transisition" id="detail-visit"></p>
                                <p class="detail-detail transisition" id="detail-detail-visit"></p>
                                <a href="Login.html"><button class="detail-join" id="detail-join"></button></a>
                            </div>
                        </div>
                        <div class="img-main-content">
                            <div>
                                <img src="../Asset/ShowRoom Page/room-5.jpg" alt="" id="bottom-1">
                            </div>
                            <div>
                                <img src="../Asset/ShowRoom Page/pexels-maria-geller-801267-2127031 (4).jpg" alt="" id="bottom-2">
                            </div>
                            <div>
                                <img src="../Asset/ShowRoom Page/room-3.jpg" alt="" id="bottom-3">
                            </div>
                            <div>
                                <img src="../Asset/ShowRoom Page/room.webp" alt="" id="bottom-4">
                            </div>
                            <div>
                                <img src="../Asset/ShowRoom Page/room-2.webp" alt="" id="bottom-5">
                            </div>
                            <div>
                                <img src="../Asset/ShowRoom Page/room-4 (1).jpg" alt="" id="bottom-6">
                            </div>
                        </div>
                    </div>
        `
        const image1 = document.getElementById("bottom-1").addEventListener("click", function(){
            document.getElementById("clicking").style.display = "none"
            document.getElementById("detail-join").style.display = "block"
            document.getElementById("detail-header").innerHTML = `<span>Main</span> Display Rooms`
            document.getElementById("detail-detail").innerHTML = `The main display area is the centerpiece of a luxury car showroom,  it aims to create an unforgettable first impression and provide customers with an immersive experience as they explore the vehicles. Our main display rooms are a testament to modern elegance, featuring high ceilings, expansive windows, and a seamless blend of contemporary and classic design elements`
            document.getElementById("detail-visit").innerHTML = `Visit Us`
            document.getElementById("detail-detail-visit").innerHTML = `We invite you to visit the Diamond Cut Motors showroom and experience the pinnacle of luxury automotive design and service. Whether you are a returning customer or new to our brand, we are committed to making your visit exceptional.`
            document.getElementById("detail-join").innerHTML = `Join Now!`
            document.getElementById("detail-header").style.opacity = "1"
            document.getElementById("detail-detail").style.opacity = "1"
            document.getElementById("detail-visit").style.opacity = "1"
            document.getElementById("detail-detail-visit").style.opacity = "1"
            document.getElementById("detail-join").style.opacity = "1"
        })
        const image2 = document.getElementById("bottom-2").addEventListener("click", function(){
            document.getElementById("clicking").style.display = "none"
            document.getElementById("detail-join").style.display = "block"
            document.getElementById("detail-header").innerHTML = `<span>Private</span> Viewing Room`
            document.getElementById("detail-detail").innerHTML = `The private viewing room is a dedicated space within a luxury car showroom designed to offer customers an exclusive and personalized experience when viewing and discussing specific vehicles. Our Private Viewing Room offers an intimate and luxurious setting, away from the main showroom floor. The room is adorned with plush furnishings, elegant decor, and soft lighting.`
            document.getElementById("detail-visit").innerHTML = `Visit Us`
            document.getElementById("detail-detail-visit").innerHTML = `We invite you to visit the Diamond Cut Motors showroom and experience the pinnacle of luxury automotive design and service. Whether you are a returning customer or new to our brand, we are committed to making your visit exceptional.`
            document.getElementById("detail-join").innerHTML = `Join Now!`
            document.getElementById("detail-header").style.opacity = "1"
            document.getElementById("detail-detail").style.opacity = "1"
            document.getElementById("detail-visit").style.opacity = "1"
            document.getElementById("detail-detail-visit").style.opacity = "1"
            document.getElementById("detail-join").style.opacity = "1"
        })
        const image3 = document.getElementById("bottom-3").addEventListener("click", function(){
            document.getElementById("clicking").style.display = "none"
            document.getElementById("detail-join").style.display = "block"
            document.getElementById("detail-header").innerHTML = `<span>Lexus</span> Display Room +`
            document.getElementById("detail-detail").innerHTML = `Our display room is designed to offer an exceptional experience. The Lexus display room is designed to showcase the brand's latest models and key features in a sophisticated and inviting environment. This area aims to create a premium customer experience, reflecting the elegance and innovation associated with the Lexus brand.`
            document.getElementById("detail-visit").innerHTML = `Visit Us`
            document.getElementById("detail-detail-visit").innerHTML = `We invite you to visit the Diamond Cut Motors showroom and experience the pinnacle of luxury automotive design and service. Whether you are a returning customer or new to our brand, we are committed to making your visit exceptional.`
            document.getElementById("detail-join").innerHTML = `Join Now!`
            document.getElementById("detail-header").style.opacity = "1"
            document.getElementById("detail-detail").style.opacity = "1"
            document.getElementById("detail-visit").style.opacity = "1"
            document.getElementById("detail-detail-visit").style.opacity = "1"
            document.getElementById("detail-join").style.opacity = "1"
        })
        const image4 = document.getElementById("bottom-4").addEventListener("click", function(){
            document.getElementById("clicking").style.display = "none"
            document.getElementById("detail-join").style.display = "block"
            document.getElementById("detail-header").innerHTML = `<span>Luxury</span> Car Rooms`
            document.getElementById("detail-detail").innerHTML = `The luxury car showroom is designed to provide an immersive and exclusive experience. Each area is carefully crafted to enhance the customer journey, from the initial greeting at the reception area to the final handover in the delivery bay. Upon entering, you will be greeted by your personal automotive consultant, dedicated to providing you with an unparalleled level of service.`
            document.getElementById("detail-visit").innerHTML = `Visit Us`
            document.getElementById("detail-detail-visit").innerHTML = `We invite you to visit the Diamond Cut Motors showroom and experience the pinnacle of luxury automotive design and service. Whether you are a returning customer or new to our brand, we are committed to making your visit exceptional.`
            document.getElementById("detail-join").innerHTML = `Join Now!`
            document.getElementById("detail-header").style.opacity = "1"
            document.getElementById("detail-detail").style.opacity = "1"
            document.getElementById("detail-visit").style.opacity = "1"
            document.getElementById("detail-detail-visit").style.opacity = "1"
            document.getElementById("detail-join").style.opacity = "1"
        })
        const image5 = document.getElementById("bottom-5").addEventListener("click", function(){
            document.getElementById("clicking").style.display = "none"
            document.getElementById("detail-join").style.display = "block"
            document.getElementById("detail-header").innerHTML = `<span>VIP</span> Rooms`
            document.getElementById("detail-detail").innerHTML = `The VIP Rooms exude an atmosphere of elegance and exclusivity. The VIP room is designed to offer an exclusive, luxurious, and personalized experience for high-profile clients. It provides a private, comfortable, and sophisticated environment where clients can view vehicles, discuss details, and make decisions in a serene and opulent setting.`
            document.getElementById("detail-visit").innerHTML = `Visit Us`
            document.getElementById("detail-detail-visit").innerHTML = `We invite you to visit the Diamond Cut Motors showroom and experience the pinnacle of luxury automotive design and service. Whether you are a returning customer or new to our brand, we are committed to making your visit exceptional.`
            document.getElementById("detail-join").innerHTML = `Join Now!`
            document.getElementById("detail-header").style.opacity = "1"
            document.getElementById("detail-detail").style.opacity = "1"
            document.getElementById("detail-visit").style.opacity = "1"
            document.getElementById("detail-detail-visit").style.opacity = "1"
            document.getElementById("detail-join").style.opacity = "1"
        })
        const image6 = document.getElementById("bottom-6").addEventListener("click", function(){
            document.getElementById("clicking").style.display = "none"
            document.getElementById("detail-join").style.display = "block"
            document.getElementById("detail-header").innerHTML = `<span>Ancient</span> Car Rooms`
            document.getElementById("detail-detail").innerHTML = `The Lexus display room is designed to showcase the brand's latest models and key features in a sophisticated and inviting environment. This area aims to create a premium customer experience, reflecting the elegance and innovation associated with the Lexus brand.`
            document.getElementById("detail-visit").innerHTML = `Visit Us`
            document.getElementById("detail-detail-visit").innerHTML = `We invite you to visit the Diamond Cut Motors showroom and experience the pinnacle of luxury automotive design and service. Whether you are a returning customer or new to our brand, we are committed to making your visit exceptional.`
            document.getElementById("detail-join").innerHTML = `Join Now!`
            document.getElementById("detail-header").style.opacity = "1"
            document.getElementById("detail-detail").style.opacity = "1"
            document.getElementById("detail-visit").style.opacity = "1"
            document.getElementById("detail-detail-visit").style.opacity = "1"
            document.getElementById("detail-join").style.opacity = "1"
        })
    }
}

last.addEventListener("change", lastmatch)
document.addEventListener("DOMContentLoaded", lastmatch)

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}


const search1 = document.getElementById("input-header")

search1.addEventListener("keyup", function(event){
    if(!(search1.value === "") && !(search1.value.trim() === "") && event.key === "Enter"){
        window.location.href = 'CarsPage.html'
    }
})

document.getElementById("header-right-search").addEventListener("mouseenter", function(){
    document.getElementById("header-absolute-1").style.opacity = "1";
})

document.getElementById("header-right-search").addEventListener("mouseleave", function(){
    document.getElementById("header-absolute-1").style.opacity = "0";
})

document.getElementById("header-right-login").addEventListener("mouseenter", function(){
    document.getElementById("header-absolute-2").style.opacity = "1";
})

document.getElementById("header-right-login").addEventListener("mouseleave", function(){
    document.getElementById("header-absolute-2").style.opacity = "0";
})

const sidebar = document.getElementById("navigation-menu").addEventListener("click", function(){
    document.getElementById("navigation-menu").classList.toggle("change")
    document.getElementById("sidebar").classList.toggle("popup-sidebar")
    document.getElementById("body").classList.toggle("blur");
    document.getElementById("header").classList.toggle("remove-border");
})

const search = document.getElementById("header-right-search").addEventListener("click", function(){
    document.getElementById("header-search-box").classList.add("popup-search")
    document.getElementById("header-right-search").classList.add("none");
    document.getElementById("header-right-search").classList.add("none:hover")
    document.getElementById("header-right-search").classList.add("none:active")
    document.getElementById("x-header").classList.add("x-header:hover");
})

const deletesearch = document.getElementById("x-header").onclick = function(){
    // document.getElementById("x-header").classList.toggle("delete-search")
    document.getElementById("header-search-box").classList.remove("popup-search")
    document.getElementById("header-right-search").classList.remove("none");
    document.getElementById("header-right-search").classList.remove("none:hover")
    document.getElementById("header-right-search").classList.remove("none:active")
}

const x = window.matchMedia("(max-width:700px)");
const y = window.matchMedia("(max-width:1000px)");

const z = window.matchMedia("(min-width:700px)");


window.addEventListener("scroll", function(){
    const navsticky = document.getElementById("nav1").classList.toggle("stickynav", window.scrollY > 160)
})
function checkmediax(){
    if(x.matches){
        document.getElementById("header-11").innerHTML = `Explore <span>Showroom</span>`
        document.getElementById("DCM").innerHTML = `
            <p class="p">D</p>
            <p class="p">C</p>
            <p>M</p>
        `
        document.getElementById("DCM").classList.add("flex-header", "flex-header-ls")
        document.getElementById("mid-navigation-top").innerHTML = `
            <a href="ShowRoom.html" class="big-navigation">SHOW ROOM</a>
        `
        document.getElementById("mid-navigation-bottom").innerHTML = `
            <p class="small-navigation">LUXURY CAR HERE AND <span>TODAY ONLY</span></p>
        `
        document.getElementById("header-right-search").addEventListener("click", function(){
            if(x.matches){
                document.getElementById("DCM").classList.add("gone")
            }
            
        })
        document.getElementById("x-header").addEventListener("click", function(){
            document.getElementById("DCM").classList.remove("gone")
        })

        // test
        window.addEventListener("scroll", function(){
            const headersticky = document.getElementById("header").classList.toggle("stickyheader", window.scrollY > 60)
        })

    }
    else{
        document.getElementById("header-11").innerHTML = `Explore Our <span>Car Showroom</span>`
        document.getElementById("DCM").innerHTML = `
        <p>DIAMONDS</p>
        <p>CUT</p>
        <p>MOTORS</p>
        `
        document.getElementById("mid-navigation-top").innerHTML = `
         <a href="(Start)HomePage.html">HOME</a>
         <a href="CarsPage.html">CARS</a>
         <a href="ShowRoom.html">SHOW ROOM</a>
         <a href="AboutUs.html">ABOUT US</a>
        `
        document.getElementById("mid-navigation-bottom").innerHTML = `
            <p>ALL OF POPULAR LUXURY CAR NOW SELL IN HERE AND<span> ONLY FOR TODAY</span></p>
        `
        document.getElementById("DCM").classList.remove("flex-header-ls", "flex-header")
        window.addEventListener("scroll", function(){
            const navsticky = document.getElementById("nav1").classList.toggle("stickynav", window.scrollY > 160)
        })
        window.addEventListener("scroll", function(){
            const headersticky = document.getElementById("header").classList.remove("stickyheader", window.scrollY > 60)
        })
    }
}

function checkmediay(){
    if(y.matches){
        document.getElementById("footer").innerHTML = `
        <div class="footer-container footer-container-js">
            <div class="footer-top footer-top-js">
                <div class="footer-top-right footer-top-right-js">
                    <img src="../Asset/Header/car-logo.png" alt="">
                    <p class="footer-des footer-des-js">DiamondCut Motors is a prestigious car reseller that provides luxurious vehicles throughout Indonesia.</p>
                    <p class="footer-top-right-absolute footer-top-right-js-new">WHEELS</p>
                </div>
                <div class="footer-top-left footer-top-left-js">
                    <div class="footer-explore footer-explore-js">
                        <div class="footer-bottom-left-flex" id="dropdown-explore">
                            <p class="footer-no-margin-js">EXPLORE</p>
                            <img src="../Asset/Footer/chevron-down-regular-24.png" alt="" class="footer-img-explore" id="footer-img-explore">
                        </div>
                        <p class="footer-explore-1 footer-explore-1-js" id="footer-list"><a href="(Start)HomePage.html">Home</a></p>
                        <p class="footer-explore-1 footer-explore-1-js" id="footer-list-2"><a href="CarsPage.html">Cars</a></p>
                        <p class="footer-explore-1 footer-explore-1-js" id="footer-list-3"><a href="ShowRoom.html">Show Room</a></p>
                        <p class="footer-explore-1 footer-explore-1-js footer-special-js" id="footer-list-4"><a href="AboutUs.html">About Us</a></p>
                    </div>
                </div>
                <div class="footer-bottom-left footer-bottom-left-js">
                    <div class="footer-bottom-left-flex footer-cr-padding" id="dropdown-copyright">
                        <p class="footer-cr-js">COPYRIGHT</p>
                        <img src="../Asset/Footer/chevron-down-regular-24.png" alt="" class="footer-img-copyright" id="footer-img-copyright">
                    </div>
                    <div class="footer-bottom-left-1 footer-bottom-left-1-js" id="footer-new-0">Website Terms</div>
                    <div class="footer-bottom-left-1 footer-bottom-left-1-js" id="footer-new-1">Privacy Policy</div>
                    <div class="footer-bottom-left-1 footer-bottom-left-1-js" id="footer-new-2">Term of Use</div>
                </div>
            </div>
    
    
            <div class="footer-bottom footer-bottom-js">
                <div class="footer-contact footer-contact-js">
                    <div>
                        <p class="footer-p footer-p-js">CONTACT</p>
                    </div>
                    <div class="footer-contact-icon footer-contact-icon-js">
                        <a href="https://www.instagram.com/" target="_blank"><img src="../Asset/Footer/igg.png" alt="" width="25px"></a>
                        <a href="https://mail.google.com/" target="_blank"><img src="../Asset/Footer/email.webp" alt="" width="25px"></a>
                        <a href="https://www.facebook.com/" target="_blank"><img src="../Asset/Footer/facebook.png" alt="" width="25px"></a>
                        <a href="https://x.com/" target="_blank"><img src="../Asset/Footer/new-tiwterrrr.png" alt="" width="25px"></a>
                        <a href="https://www.tiktok.com/" target="_blank"><img src="../Asset/Footer/no-bg-tiktok.png" alt="" width="25px"></a>
                    </div>
                    <div class="footer-phone footer-phone-js">
                        <img src="../Asset/Footer/newe-phnefwe.png" alt="" width="25px">
                        <p>+ 1 234 567 890</p>
                    </div>
                </div>
                <div class="footer-cr footer-cr1-js" id="hei">
                    © 2024-2025 DIAMONDSCUT MOTORS. ALL RIGHT RESERVED.
                </div>
            </div>
        </div>
        `
        let i;
        let j;
        const dropdown1 = document.getElementById("dropdown-explore");
        const dropdown2 = document.getElementById("dropdown-copyright");

        dropdown2.addEventListener("click", function(){
            const dropdowncontent5 = document.getElementById("footer-new-0");
            if(dropdowncontent5.style.display === "block"){
                dropdowncontent5.style.display = "none"
            }
            else{
                dropdowncontent5.style.display = "block";
            }
            const dropdowncontent6 = document.getElementById("footer-new-1");
            if(dropdowncontent6.style.display === "block"){
                dropdowncontent6.style.display = "none";
            }
            else{
                dropdowncontent6.style.display = "block";
            }
            const dropdowncontent7 = document.getElementById("footer-new-2");
            if(dropdowncontent7.style.display === "block"){
                dropdowncontent7.style.display = "none"
            }
            else{
                dropdowncontent7.style.display = "block";
            }
            const panah = document.getElementById("footer-img-copyright")
            if(panah.src === "http://127.0.0.1:5500/WEB_AOL_Project%20HCI/Asset/Footer/chevron-down-regular-24.png"){
                panah.src = "../Asset/Footer/chevron-up-regular-24.png"
            }
            else{
                panah.src = "../Asset/Footer/chevron-down-regular-24.png"
            }
            
        })

        dropdown1.addEventListener("click", function(){
            const dropdowncontent = document.getElementById("footer-list");
            if(dropdowncontent.style.display === "block"){
                dropdowncontent.style.display = "none"
            }
            else{
                dropdowncontent.style.display = "block";
            }
            const dropdowncontent1 = document.getElementById("footer-list-2");
            if(dropdowncontent1.style.display === "block"){
                dropdowncontent1.style.display = "none";
            }
            else{
                dropdowncontent1.style.display = "block";
            }
            const dropdowncontent2 = document.getElementById("footer-list-3");
            if(dropdowncontent2.style.display === "block"){
                dropdowncontent2.style.display = "none"
            }
            else{
                dropdowncontent2.style.display = "block";
            }
            const dropdowncontent3 = document.getElementById("footer-list-4");
            if(dropdowncontent3.style.display === "block"){
                dropdowncontent3.style.display = "none"
            }
            else{
                dropdowncontent3.style.display = "block";
            }
            
            const panah1 = document.getElementById("footer-img-explore")
            if(panah1.src === "http://127.0.0.1:5500/WEB_AOL_Project%20HCI/Asset/Footer/chevron-down-regular-24.png"){
                panah1.src = "../Asset/Footer/chevron-up-regular-24.png"
            }
            else{
                panah1.src = "../Asset/Footer/chevron-down-regular-24.png"
            }
        })
    }
    else{
        document.getElementById("footer").innerHTML = `
        <div class="footer-container">
            <div class="footer-top footer-adjust-1">
                <div class="footer-top-left">
                    <div class="footer-explore">
                        <p>Explore</p>
                        <p class="footer-explore-1"><a href="(Start)HomePage.html">Home</a></p>
                        <p class="footer-explore-1"><a href="CarsPage.html">Cars</a></p>
                        <p class="footer-explore-1"><a href="ShowRoom.html">Show Room</a></p>
                        <p class="footer-explore-1"><a href="AboutUs.html">About Us</a></p>
                    </div>
                    <div class="footer-contact">
                        <div>
                            <p class="footer-p">Contact</p>
                        </div>
                        <div class="footer-contact-icon">
                            <a href="https://www.instagram.com/" target="_blank"><img src="../Asset/Footer/igg.png" alt="" width="25px"></a>
                            <a href="https://mail.google.com/" target="_blank"><img src="../Asset/Footer/email.webp" alt="" width="25px"></a>
                            <a href="https://www.facebook.com/" target="_blank"><img src="../Asset/Footer/facebook.png" alt="" width="25px"></a>
                            <a href="https://x.com/" target="_blank"><img src="../Asset/Footer/new-tiwterrrr.png" alt="" width="25px"></a>
                            <a href="https://www.tiktok.com/" target="_blank"><img src="../Asset/Footer/no-bg-tiktok.png" alt="" width="25px"></a>
                        </div>
                        <div class="footer-phone">
                            <img src="../Asset/Footer/newe-phnefwe.png" alt="" width="25px">
                            <p>+ 1 234 567 890</p>
                        </div>
                    </div>
                </div>
                <div class="footer-top-right">
                    <img src="../Asset/Header/car-logo.png" alt="">
                    <p class="footer-des">DiamondCut Motors is a prestigious car reseller that provides luxurious vehicles throughout Indonesia.</p>
                    <p class="footer-top-right-absolute">WHEELS</p>
                </div>
            </div>


            <div class="footer-bottom footer-adjust">
                <div class="footer-bottom-left">
                    <div>Website Terms</div>
                    <div>Privacy Policy</div>
                    <div>Term of Use</div>
                </div>
                <div class="footer-cr" id="hei">
                    © 2024-2025 DIAMONDSCUT MOTORS
                </div>
            </div>
        </div>
        `
    }
}

x.addEventListener("change", checkmediax);
document.addEventListener("DOMContentLoaded", checkmediax)

y.addEventListener("change", checkmediay);
document.addEventListener("DOMContentLoaded", checkmediay)