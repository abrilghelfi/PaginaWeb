<script>
  function mostrarPlato() {
    const checkboxes = document.querySelectorAll('#formulario input[type="checkbox"]');
    const ingredientes = [];

    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        ingredientes.push(checkbox.value);
      }
    });

    const resultadoDiv = document.getElementById("resultado");

    if (ingredientes.length > 0) {
      resultadoDiv.innerHTML = `
        <h3>🍽️ Tu plato ideal tiene:</h3>
        <ul> {ingredientes.map(i => <li> {i}</li>).join('')}</ul>
      `;
      resultadoDiv.style.display = "block";
    } else {
      resultadoDiv.innerHTML = <p>❗No seleccionaste ningún ingrediente.</p>;
      resultadoDiv.style.display = "block";
    }
  }
</script>