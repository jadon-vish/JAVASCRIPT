function triArea(a,b,c){
    let s= (a+b+c)/2
    let area = (s*(s-a)*(s-b)*(s-c))**0.5
    return area
}

console.log(triArea(5,6,7));
