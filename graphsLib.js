"use strict"

function createCanvas(width, height) {
        let canvas = document.createElement('canvas');
        let body = document.querySelector('body');
        canvas.classList.add("graph");
        canvas.style = "border:1px solid lightgray;"
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        body.appendChild(canvas);
        return ctx;
}

function drawGrid(ctx, width, height) {
    
    ctx.lineWidth = '1';
    ctx.strokeStyle = "red";
    for(let i=50;i<width;i++){
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
        i+=50;
    }

    for(let i=50;i<height;i++){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
        i+=50;
    }
}


function Graph() {
    
}

Graph.prototype = {
    
}

function createHistogram(data=[], color="dodgerblue", xAxis="", yAxis=""){
        let length = data.length;
        let max = Math.max.apply(null, data)+36;
        const ctx = createCanvas(26*length, max);
        
        let x = 5;
        for(let i=0;i<data.length;i++){
            ctx.fillStyle = color;
            let startY = max - data[i];
            let width = 20;
            ctx.fillRect(x, startY, width, data[i]);
            
            ctx.fillStyle = 'black';
            ctx.fillText(`${data[i]}`, x+2, startY-3, 30)
            x = x + width + 5;
        }
        ctx.fillText(`X: ${xAxis} \n Y: ${yAxis}`, length*18, 16);
}

createHistogram([160,150,140,100,400,400,120,340,10,20,36,34,15,355,77,233], "green", "temp", "hydration");


function createPieChart(data=[], color="dodgerblue") {
    const ctx = createCanvas(500, 400);
    
}

createPieChart([30,60,10]);