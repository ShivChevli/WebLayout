var val = ['home', 'service', 'aboutUs', 'project', 'contact']
var arr = [];
val.forEach(li => {
    arr.push(document.getElementById(li).offsetTop - 100);
});
let temp = document.querySelectorAll(".nevigation li");
let temp1 = document.querySelectorAll(".sm-nevigation li");

function selectActivationLink(l) {
    document.querySelectorAll(".avtiveLink").forEach(li => {
        li.classList.remove("avtiveLink");
    })
    temp[l].classList.add("avtiveLink");
    temp1[l].classList.add("avtiveLink");
}
document.addEventListener("scroll", function () {

    let hight = window.scrollY;
    for (i = 4; i >= 0; i--) {
        if (hight > arr[i]) {
            selectActivationLink(i);
            break;
        }
    }
    if (hight + window.innerHeight > document.body.scrollHeight) {
        selectActivationLink(4);
        console.log("Tue");
    };
})

temp.forEach(li => {
    li.onclick = function () {
        let id = this.dataset.linkid;
        selectActivationLink(id);
        window.scrollTo(0, arr[id] + 10);
    }
});

temp1.forEach(li => {
    li.onclick = function () {
        let id = this.dataset.linkid;
        selectActivationLink(id);
        window.scrollTo(0, arr[id] + 10);
        document.querySelector(".sm-menue-button").style.display = "none";
        document.getElementById("close").style.display = "none";
        document.getElementById("menue").style.display = "block";
    }
});

document.getElementById("menue").onclick = function () {
    this.style.display = "none";
    document.getElementById("close").style.display = "block";
    document.querySelector(".sm-menue-button").style.display = "block";
}

document.getElementById("close").onclick = function () {
    this.style.display = "none";
    document.getElementById("menue").style.display = "block";
    document.querySelector(".sm-menue-button").style.display = "none";
}


//Drop Box
let dropBoxContent = {
    "Mission": "Mission :- Lorem ipsum dolor sit amet consectetur adipisicing elit.Modi accusamus consequatur architecto libero officiis ipsa sit quo ea, possimus, velit ipsam explicabo odio eius necessitatibus ? Quasi deserunt hic eius natus ? ",
    "Vision": "Vision :- Lorem ipsum dolor sit amet consectetur adipisicing elit.Modi accusamus consequatur architecto libero officiis ipsa sit quo ea, possimus, velit ipsam explicabo odio eius necessitatibus ? Quasi deserunt hic eius natus ? ",
    "Values": "A :- Lorem ipsum dolor sit amet consectetur adipisicing elit.Modi accusamus consequatur architecto libero officiis ipsa sit quo ea, possimus, velit ipsam explicabo odio eius necessitatibus ? Quasi deserunt hic eius natus ? ",
}
let dropBoxText = document.getElementById("dropBoxText");
document.querySelectorAll(".dropBox-tab li").forEach(li => {
    li.onclick = function () {
        let t = li.dataset.heading;
        dropBoxText.innerHTML = dropBoxContent[t];
        document.querySelector(".avtivaTab").classList.remove("avtivaTab");
        li.classList.add("avtivaTab");
    }
})

//Slider 
let sliderData = [
    "Data 1 :- Lorem ipsum dolor sit amet consectetur adipisicing elit.Modi accusamus consequatur architecto libero officiis ipsa sit quo ea, possimus, velit ipsam explicabo odio eius necessitatibus ? Quasi deserunt hic eius natus ?",
    "Data 2 :- Lorem ipsum dolor sit amet consectetur adipisicing elit.Modi accusamus consequatur architecto libero officiis ipsa sit quo ea, possimus, velit ipsam explicabo odio eius necessitatibus ? Quasi deserunt hic eius natus ?",
    "Data 3 :- Lorem ipsum dolor sit amet consectetur adipisicing elit.Modi accusamus consequatur architecto libero officiis ipsa sit quo ea, possimus, velit ipsam explicabo odio eius necessitatibus ? Quasi deserunt hic eius natus ?",
]
let i = 1;
let slider = document.getElementById("sliderText");
async function sliderLeft() {
    if (i > 3) {
        i = 0;
    }
    slider.classList.add("dataIn-animation");
    setTimeout(() => slider.innerText = sliderData[i], 500);
    setTimeout(() => slider.classList.remove("dataIn-animation"), 5000);
    i++;
}
function sliderRight() {
    if (i < 0) {
        i = 3;
    }
    slider.classList.add("dataOut-animation");
    setTimeout(() => slider.innerText = sliderData[i], 500);
    setTimeout(() => slider.classList.remove("dataOut-animation"), 5000);
    i--;
}
let d = setInterval(() => {
    console.log("Timer Run");
    sliderLeft();
}, 10000);

document.getElementById("left-arrow").onclick = async function () {
    sliderLeft();
}
document.getElementById("right-arrow").onclick = async function () {
    sliderRight();
}

//CopyRight
let year = new Date();
document.getElementById("copyYear").innerHTML = year.getFullYear();