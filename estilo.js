<script>
const btncomprar =
document.getElementById("productosboton");
const carta=
document.getElementById("cartaproductos");

btncomprar.addEventListener("click", () =>{
if(carta.style.display == "none"){
    carta.style.display = "block";
} else{
    carta.style.display = "none";
}
})
</script>