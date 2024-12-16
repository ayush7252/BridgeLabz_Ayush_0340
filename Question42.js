// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
function CircleIntersect(x1,y1,r1,x2,y2,r2){
    let dx = x2-x1;
    let dy = y2-y1;
    let distance = Math.sqrt(dx*dx + dy*dy);

    if(distance <= r1+r2 && distance >= Math.abs(r1-r2)){
        return true;
    }else {
        return false;
    }
}

let x1 = 3
let x2 = 4
let y1 = 5
let y2 = 10
let r1 = 2
let r2 = 4

console.log(CircleIntersect(x1, y1, r1, x2, y2, r2)) 