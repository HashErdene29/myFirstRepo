let head = {
    glasses: 1
}

let table = Object.create(head)
table.pen = 3;

let bed = Object.create(table)
bed.sheets = 1;
bed.pillow = 2;

let pockets = Object.create(bed)
pockets.money = 2000;

console.log("expect 3: ", pockets.pen);
console.log("expect 1: ", bed.glasses);