let path = 'UDDDUDUU';
let steps = path.length;

const compareArray = (steps,path) => {

    let valleys = 0;
    let elevation = 0;
    for(let i=0;i<steps;i++){
        if(path[i] == 'D'){
            elevation--;
        }else{
            elevation == -1 ? valleys++ : 0;
            elevation++;
        }
    }
    return valleys;
}

console.log(compareArray(steps,path));

