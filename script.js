function submit(){
    player = [0, 0];
    var input = document.getElementById('input');
    table_size = parseInt(input.value);
    if (table_size > 30){
        return;
    }
    input.value = '';
    table.textContent = '';

    for (var row = 1; row <= table_size; row++){
        var html_row = document.createElement('tr');
    for (var col = 1; col <= table_size; col++){
        var html_col = document.createElement('th');
        html_col.setAttribute('id', `${row} ${col}`);
        html_col.textContent = row*col;
        html_row.appendChild(html_col);
        
        console.log(row*col);
} 
table.appendChild(html_row);
}};
window.addEventListener('keydown', key => {
    if (key.code === "Enter"){
        submit();
}})

let table = document.getElementById('myTable');
let html_number_display = document.getElementById('number_display');
let player;
let table_size = 0;

window.addEventListener('keydown', key => {
    table.rows[player[0]].cells[player[1]].style.backgroundColor = 'aqua';
    if (key.code === "ArrowRight" && player[1] < table_size-1){
        player[1]++;
    }  if (key.code === "ArrowLeft" && player[1] > 0){
        player[1]--;
    }  if (key.code === "ArrowDown" && player[0] < table_size-1){
        player[0]++;
    }  if (key.code === "ArrowUp" && player[0] > 0){
        player[0]--;
    }
    html_number_display.innerText = `${player[0]+1} ${player[1]+1}`;
    table.rows[player[0]].cells[player[1]].style.backgroundColor = 'red';
})