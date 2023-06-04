let display = document.querySelector(".color-display");


let hex = [1 , 2 ,3 ,4 ,5 ,6 ,7 ,8, 'A' , 'B' , 'C' , 'D' ,'E' , 'F'];


function generate(){
    let color = "";

    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 10)];
    }

    // color = "FFFFFF";
    display.innerHTML = "#" + color;
    display.style.color = color == "FFFFFF" ? "#000000" : "#" + color;
    document.body.style.background = "#" + color;
    // console.log(color);
}