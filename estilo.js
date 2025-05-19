let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('carrito-lista');
  lista.innerHTML = '';

  carrito.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });

  document.getElementById('total').textContent = total.toFixed(2);
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('main-content');

  if (sidebar.style.width === '250px') {
    sidebar.style.width = '0';
    content.style.marginLeft = '0';
  } else {
    sidebar.style.width = '250px';
    content.style.marginLeft = '250px';
  }
}
