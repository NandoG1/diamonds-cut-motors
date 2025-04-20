// VALIDATION JS
const name1 = document.getElementById("name")
const email1 = document.getElementById("email")
const phone1 = document.getElementById("phone")
const pass1 = document.getElementById("password")
const cpass1 = document.getElementById("confirm")


function validateemail(){
    let checking = 0;
    for(let i = 0;i<email1.value.length;i++){
        if(email1.value[i] === "@"){
            checking++;
        }
    }

    if(email1.value === ""){
        email1.style.border = "none";
        email1.style.backgroundImage = "none"
        document.getElementById("wrong-input-2").style.display = "none";
        return false
    }
    else if(email1.value[0] === " "){
        email1.style.border = "3px solid red"
        email1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-2").style.display = "block";
        document.getElementById("wrong-input-2").innerHTML = "First letter must not be space"
        return false
    }
    else if(email1.value[0] === "@"){
        email1.style.border = "3px solid red"
        email1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-2").style.display = "block";
        document.getElementById("wrong-input-2").innerHTML = "First letter must not be '@'"
        return false
    }
    else if(checking > 1){
        email1.style.border = "3px solid red"
        email1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-2").style.display = "block";
        document.getElementById("wrong-input-2").innerHTML = "'@' can not be more than 1"
        return false
    }
    else if((!(email1.value.endsWith("@gmail.com")))){
        email1.style.border = "3px solid red"
        email1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-2").style.display = "block";
        document.getElementById("wrong-input-2").innerHTML = "Please fill up your email (only @gmail.com)"
        return false
    }
    else{
        email1.style.border = "3px solid green";
        email1.style.backgroundImage = "url('../Asset/Login Page/check-regular-24.png')"
        document.getElementById("wrong-input-2").style.display = "none";
        return true
    }
    return false;
}

function validateuser(){
    let simbol = 0;
    for(let i = 0;i<name1.value.length;i++){
        if(name1.value[i] === "!" || name1.value[i] === "@" || name1.value[i] === "#" || name1.value[i] === "$" || name1.value[i] === "%" || name1.value[i] === "^" || name1.value[i] === "&" || name1.value[i] === "*" || name1.value[i] === "(" || name1.value[i] === ")" || name1.value[i] === "-" || name1.value[i] === "_" || name1.value[i] === "+" || name1.value[i] === "=" || name1.value[i] === "{" || name1.value[i] === "[" || name1.value[i] === "}" || name1.value[i] === "]" || name1.value[i] === "|" || name1.value[i] === ";" || name1.value[i] === ":" || name1.value[i] === "'" || name1.value[i] === "," || name1.value[i] === "<" || name1.value[i] === "." || name1.value[i] === ">" || name1.value[i] === "/" || name1.value[i] === "?" || name1.value[i] === '"' || name1.value[i] === "~" || name1.value[i] === "`" ){
            simbol++;
        }
    }
    if(name1.value === ""){
        name1.style.border = "none";
        name1.style.backgroundImage = "none"
        document.getElementById("wrong-input-1").style.display = "none";
        return false
    }
    else if(simbol > 0){
        name1.style.border = "3px solid red"
        name1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-1").style.display = "block";
        document.getElementById("wrong-input-1").innerHTML = "Username can not contain any symbol"
        return false
    }
    else if(name1.value[0] === " "){
        name1.style.border = "3px solid red"
        name1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-1").style.display = "block";
        document.getElementById("wrong-input-1").innerHTML = "First letter must not be space"
        return false
    }
    else if(name1.value.length <= 5){
        name1.style.border = "3px solid red"
        name1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-1").style.display = "block";
        document.getElementById("wrong-input-1").innerHTML = "Length of username can not less than 5"
        return false
    }
    else if(name1.value.length > 20){
        name1.style.border = "3px solid red"
        name1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-1").style.display = "block";
        document.getElementById("wrong-input-1").innerHTML = "Length of username can not more than 20"
        return false
    }
    else{
        name1.style.border = "3px solid green";
        name1.style.backgroundImage = "url('../Asset/Login Page/check-regular-24.png')"
        document.getElementById("wrong-input-1").style.display = "none";
        return true
    }
    return false
}

function validatephone(){
    let notnumber = 0;
    for(let i = 0;i<phone1.value.length;i++){
        if(phone1.value[i] !== "1" && phone1.value[i] !== "2" && phone1.value[i] !== "3" && phone1.value[i] !== "4" && phone1.value[i] !== "5" && phone1.value[i] !== "6" && phone1.value[i] !== "7" && phone1.value[i] !== "8" && phone1.value[i] !== "9" && phone1.value[i] !== "0"){
            notnumber++;
        }
    }

    if(phone1.value === ""){
        phone1.style.border = "none";
        phone1.style.backgroundImage = "none"
        document.getElementById("wrong-input-3").style.display = "none";
        return false
    }
    else if(!(phone1.value.startsWith("0"))){
        phone1.style.border = "3px solid red"
        phone1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-3").style.display = "block";
        document.getElementById("wrong-input-3").innerHTML = "Phone must begin with '0'"
        return false
    }
    else if(notnumber > 0){
        phone1.style.border = "3px solid red"
        phone1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-3").style.display = "block";
        document.getElementById("wrong-input-3").innerHTML = "Input must be just number"
        return false
    }
    else{
        phone1.style.border = "3px solid green";
        phone1.style.backgroundImage = "url('../Asset/Login Page/check-regular-24.png')"
        document.getElementById("wrong-input-3").style.display = "none";
        return true
    }
    return false
}

function validatepass(){
    if(pass1.value === ""){
        pass1.style.border = "none";
        pass1.style.backgroundImage = "none"
        document.getElementById("wrong-input-4").style.display = "none";
        return false
    }
    else if(pass1.value.length < 7){
        pass1.style.border = "3px solid red"
        pass1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-4").style.display = "block";
        document.getElementById("wrong-input-4").innerHTML = "Length of pass can not less than 7"
        return false
    }
    else{
        pass1.style.border = "3px solid green";
        pass1.style.backgroundImage = "url('../Asset/Login Page/check-regular-24.png')"
        document.getElementById("wrong-input-4").style.display = "none";
        return true
    }
    return false
}

function validateconfirm(){
    if(cpass1.value === ""){
        cpass1.style.border = "none";
        cpass1.style.backgroundImage = "none"
        document.getElementById("wrong-input-5").style.display = "none";
        return false
    }
    else if(cpass1.value !== pass1.value){
        cpass1.style.border = "3px solid red"
        cpass1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-5").style.display = "block";
        document.getElementById("wrong-input-5").innerHTML = "Password not match"
        return false
    }
    else{
        cpass1.style.border = "3px solid green";
        cpass1.style.backgroundImage = "url('../Asset/Login Page/check-regular-24.png')"
        document.getElementById("wrong-input-5").style.display = "none";
        return true
    }
    return false
}


function validate(){
    // document.getElementById("check-read").classList.remove("shaking");
    if(validateuser() === false){
        name1.style.border = "3px solid red"
        name1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-1").style.display = "block";
        document.getElementById("wrong-input-1").innerHTML = "Please insert with correctly"
        return false
    }
    else if(validateemail() === false){
        email1.style.border = "3px solid red"
        email1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-2").style.display = "block";
        document.getElementById("wrong-input-2").innerHTML = "Please insert with correctly"
        return false
    }
    else if(validatephone() === false){
        phone1.style.border = "3px solid red"
        phone1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-3").style.display = "block";
        document.getElementById("wrong-input-3").innerHTML = "Please insert with correctly"
        return false
    }
    else if(validatepass() === false){
        pass1.style.border = "3px solid red"
        pass1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-4").style.display = "block";
        document.getElementById("wrong-input-4").innerHTML = "Please insert with correctly"
        return false
    }
    else if(validateconfirm() === false){
        cpass1.style.border = "3px solid red"
        cpass1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("wrong-input-5").style.display = "block";
        document.getElementById("wrong-input-5").innerHTML = "Please insert with correctly"
        return false
    }
    else if(document.getElementById("check-read").checked === false){
        document.getElementById("check-read").classList.toggle("shaking");
        return false
    }
    else{
        window.location.href = "After.html"
        localStorage.setItem("username", name1.value)
    }
}

const popup1 = document.getElementById("us")
const popup2 = document.getElementById("pw")

function validate1(){
    let simbol = 0;
    for(let i = 0;i<popup1.value.length;i++){
        if(popup1.value[i] === "!" || popup1.value[i] === "@" || popup1.value[i] === "#" || popup1.value[i] === "$" || popup1.value[i] === "%" || popup1.value[i] === "^" || popup1.value[i] === "&" || popup1.value[i] === "*" || popup1.value[i] === "(" || popup1.value[i] === ")" || popup1.value[i] === "-" || popup1.value[i] === "_" || popup1.value[i] === "+" || popup1.value[i] === "=" || popup1.value[i] === "{" || popup1.value[i] === "[" || popup1.value[i] === "}" || popup1.value[i] === "]" || popup1.value[i] === "|" || popup1.value[i] === ";" || popup1.value[i] === ":" || popup1.value[i] === "'" || popup1.value[i] === "," || popup1.value[i] === "<" || popup1.value[i] === "." || popup1.value[i] === ">" || popup1.value[i] === "/" || popup1.value[i] === "?" || popup1.value[i] === '"' || popup1.value[i] === "~" || popup1.value[i] === "`" ){
            simbol++;
        }
    }
    if(popup1.value === ""){
        popup1.style.border = "none";
        popup1.style.backgroundImage = "none"
        document.getElementById("popup-wrong-1").style.display = "none";
        return false
    }
    else if(simbol > 0){
        popup1.style.border = "3px solid red"
        popup1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("popup-wrong-1").style.display = "block";
        document.getElementById("popup-wrong-1").innerHTML = "Username can not contain any symbol"
        return false
    }
    else if(popup1.value[0] === " "){
        popup1.style.border = "3px solid red"
        popup1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("popup-wrong-1").style.display = "block";
        document.getElementById("popup-wrong-1").innerHTML = "First letter must not be space"
        return false
    }
    else if(popup1.value.length <= 5){
        popup1.style.border = "3px solid red"
        popup1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("popup-wrong-1").style.display = "block";
        document.getElementById("popup-wrong-1").innerHTML = "Length of username can not less than 5"
        return false
    }
    else if(popup1.value.length > 20){
        popup1.style.border = "3px solid red"
        popup1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("popup-wrong-1").style.display = "block";
        document.getElementById("popup-wrong-1").innerHTML = "Length of username can not more than 20"
        return false
    }
    else{
        popup1.style.border = "3px solid green";
        popup1.style.backgroundImage = "url('../Asset/Login Page/check-regular-24.png')"
        document.getElementById("popup-wrong-1").style.display = "none";
        return true
    }
    return false
}

function validate2(){
    if(popup2.value === ""){
        popup2.style.border = "none";
        popup2.style.backgroundImage = "none"
        document.getElementById("popup-wrong-2").style.display = "none";
        return false
    }
    else if(popup2.value.length < 7){
        popup2.style.border = "3px solid red"
        popup2.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("popup-wrong-2").style.display = "block";
        document.getElementById("popup-wrong-2").innerHTML = "Length of pass can not less than 7"
        return false
    }
    else{
        popup2.style.border = "3px solid green";
        popup2.style.backgroundImage = "url('../Asset/Login Page/check-regular-24.png')"
        document.getElementById("popup-wrong-2").style.display = "none";
        return true
    }
    return false
}

function validatepop(){
    if(validate1() === false){
        popup1.style.border = "3px solid red"
        popup1.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("popup-wrong-1").style.display = "block";
        document.getElementById("popup-wrong-1").innerHTML = "Please insert with correctly"
        return false
    }
    else if(validate2() === false){
        popup2.style.border = "3px solid red"
        popup2.style.backgroundImage = "url('../Asset/Login Page/x-regular-24 (1).png')"
        document.getElementById("popup-wrong-2").style.display = "block";
        document.getElementById("popup-wrong-2").innerHTML = "Please insert with correctly"
        return false
    }
    else{
        window.location.href = "After2.html"
        localStorage.setItem("login-user", popup1.value)
    }
}

function popupnew(){
    document.getElementById("pop-pop").style.display = "block"
}

function exit(){
    document.getElementById("pop-pop").style.display = "none"
}

// END VALIDATE

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

const u = window.matchMedia("(max-width:1250px)");
const v = window.matchMedia("(max-width:600px)");

function mediau(){
    if(u.matches){
        document.getElementById("main-content-img").src = "../Asset/Login Page/car.jpg"
    }
    else{
        document.getElementById("main-content-img").src = "../Asset/Login Page/pexels-kelvin809-1519192.jpg"
    }
}


u.addEventListener("change", mediau)
document.addEventListener("DOMContentLoaded", mediau)



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
        document.getElementById("DCM").innerHTML = `
            <p class="p">D</p>
            <p class="p">C</p>
            <p>M</p>
        `
        document.getElementById("DCM").classList.add("flex-header", "flex-header-ls")
        document.getElementById("mid-navigation-top").innerHTML = `
            <a href="Login.html" class="big-navigation">LOGIN</a>
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

      
        window.addEventListener("scroll", function(){
            const headersticky = document.getElementById("header").classList.toggle("stickyheader", window.scrollY > 60)
        })

    }
    else{
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
