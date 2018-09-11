let todos = [];
const inputKegiatanDOM = document.getElementById('input-kegiatan');
const tambahDOM = document.getElementById('tambah');
const listDOM = document.getElementById('list');


var data = JSON.parse(localStorage.getItem('todos'));
console.log("Data: " + data);
if (data == null){
    todos = [];
} 
else {
    todos = data;
}

function render(){
    let index = 0;
    listDOM.innerHTML = '';
    while ( index < todos.length) {
        console.log(index);
        if (todos[index].status == true){
            listDOM.innerHTML += '<a href="#" class="list-group-item list-group-item-action flex-column align-items-start"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1"><input checked onchange="statusBerubah('+ index +')" type="checkbox"><strike><span> ' + todos[index].nama + '</span></strike></h5><button onclick = "hapus('+ index +')" type="button" class="close" data-dismiss="alert" aria-label="Close"><span class="done">rampung</span></button></div></a>';
            index++ }
        else {
            listDOM.innerHTML += '<a href="#" class="list-group-item list-group-item-action flex-column align-items-start"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1"><input onchange="statusBerubah('+ index +')" type="checkbox"><span> ' + todos[index].nama + '</span></h5><button onclick = "hapus('+ index +')" type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div></a>';
            index++
        }
    }
}
render();

tambahDOM.addEventListener('click', function(){
    var todo = {
        nama : inputKegiatanDOM.value,
        status : false
    };
    console.log(todo);
    if (inputKegiatanDOM.value !==""){
        todos.push(todo)
    }
    else {alert("Data tidak boleh kosong !")}
    console.log (todos);
    render();
    inputKegiatanDOM.value = '';
    localStorage.setItem('todos', JSON.stringify(todos));
})

function statusBerubah(index){
    console.log(index);
    if(todos[index].status == true){
        todos[index].status = false
    } else{
        todos[index].status = true
    }
    render();
    localStorage.setItem('todos', JSON.stringify(todos));
}

function hapus(index){
    todos.splice(index,1)
    render()
    localStorage.setItem('todos', JSON.stringify(todos));
}

// for (index = 0; index < todo.length; index++) {
// listDOM.innerHTML += '<a href="#" class="list-group-item list-group-item-action flex-column align-items-start"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1"><input type="checkbox"><span> ' + todo[index] + '</span></h5><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div></a>';
// console.log(index);
// }







