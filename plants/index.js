// burger constants
const myToggle = document.querySelector(".toggle_svg");
const mobNav = document.querySelector(".mobile_nav");
const mobLink = document.querySelectorAll(".mob_link");
// Blur constants
const ser_garden_btn = document.querySelector(".garden_btn");
const ser_lawn_btn = document.querySelector(".lawn_btn");
const ser_planting_btn = document.querySelector(".planting_btn");
const garden_blocks = document.querySelectorAll(".garden");
const lawn_blocks = document.querySelectorAll(".lawn");
const plant_blocks = document.querySelectorAll(".planting");
const serv_items = document.querySelectorAll(".service_item");
// Acoordeon constants
const details_coll = document.querySelectorAll(".detail");
const standart_sum = document.querySelector('.standard');
const basic_sum = document.querySelector('.basic');
const pro_sum = document.querySelector('.pro');
const summaries = document.querySelectorAll('.sum');



const myToggleFunc = (event) => {
    mobNav.classList.toggle("open");
    myToggle.classList.toggle("cross");
}
const BlurFunc = (event) => {
    if(event.target.classList.contains ('planting_btn')) {

        ser_planting_btn.classList.toggle('active_btn');

        if (ser_garden_btn.classList.contains ('active_btn') && ser_lawn_btn.classList.contains ('active_btn')) {
            serv_items.forEach(block => {
                block.classList.toggle('blurred');
            })
            ser_garden_btn.classList.remove ('active_btn');
            ser_lawn_btn.classList.remove ('active_btn');
            
        } else if (ser_garden_btn.classList.contains ('active_btn') || ser_lawn_btn.classList.contains ('active_btn')) {
            plant_blocks.forEach(block => {
                block.classList.toggle('blurred');
            })
        } else {
            serv_items.forEach(block => {
                block.classList.toggle('blurred');
            })
            plant_blocks.forEach(block => {
                block.classList.toggle('blurred');
                })
        }


    } else if (event.target.classList.contains ('garden_btn')){
        ser_garden_btn.classList.toggle('active_btn'); 
        if (ser_planting_btn.classList.contains ('active_btn') && ser_lawn_btn.classList.contains ('active_btn')) {
            serv_items.forEach(block => {
                block.classList.toggle('blurred');
            })
            ser_planting_btn.classList.remove ('active_btn');
            ser_lawn_btn.classList.remove ('active_btn');
            
        } else if (ser_planting_btn.classList.contains ('active_btn') || ser_lawn_btn.classList.contains ('active_btn')) {
            garden_blocks.forEach(block => {
                block.classList.toggle('blurred');
            })
        } else {
            serv_items.forEach(block => {
                block.classList.toggle('blurred');
            })
            garden_blocks.forEach(block => {
                block.classList.toggle('blurred');
                })
        }
    } else {
        ser_lawn_btn.classList.toggle('active_btn');
        if (ser_planting_btn.classList.contains ('active_btn') && ser_garden_btn.classList.contains ('active_btn')) {
            serv_items.forEach(block => {
                block.classList.toggle('blurred');
            })
            ser_planting_btn.classList.remove ('active_btn');
            ser_garden_btn.classList.remove ('active_btn');
            
        } else if (ser_planting_btn.classList.contains ('active_btn') || ser_garden_btn.classList.contains ('active_btn')) {
            lawn_blocks.forEach(block => {
                block.classList.toggle('blurred');
            })
        } else {
            serv_items.forEach(block => {
                block.classList.toggle('blurred');
            })
            lawn_blocks.forEach(block => {
                block.classList.toggle('blurred');
                })
        }
    }
  
}

const detailFunc = (event) => { 
 details_coll.forEach(det => {
    if (det != event.target.parentNode) {
        det.removeAttribute('open')
    }
 })
}



myToggle.addEventListener("click", myToggleFunc);
mobLink.forEach(link => {
    link.addEventListener("click", myToggleFunc);
})

ser_garden_btn.addEventListener("click", BlurFunc);
ser_lawn_btn.addEventListener("click", BlurFunc);
ser_planting_btn.addEventListener("click", BlurFunc);


summaries.forEach(sum => {
    sum.addEventListener("click", detailFunc);
})
