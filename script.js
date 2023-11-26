function submit(){
    console.log('clicked');
    let table = document.getElementById('myTable');
    var input = document.getElementById('input');
    var table_size = parseInt(input.value);
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