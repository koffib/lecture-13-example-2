const iddd = document.getElementById("iddd");
const body = document.getElementsByTagName("body")[0];


iddd.addEventListener('change', function(){
    body.style.backgroundColor = iddd.value ;
})