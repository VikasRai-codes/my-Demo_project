
function printTable(num){
    if(num <= 0){
        return;
    }
    printTable(num-1)
    console.log(num);
}
printTable(10);
