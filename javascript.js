const tableComision = document.getElementById("table2");
tableComision.style.display = "none";

const tableMonedas = document.getElementById("table1");
tableMonedas.style.display = "block";

const comision = document.getElementById("rigth");
comision.addEventListener("click", desplegarTableCommission);

const monedas = document.getElementById("left");
monedas.addEventListener("click", desplegarMonedas);

function desplegarTableCommission() {
  tableComision.style.display = "block";
  tableMonedas.style.display = "none";
}

function desplegarTableCommission() {
  tableComision.style.display = "block";
  tableMonedas.style.display = "none";
}

function desplegarMonedas() {
  tableComision.style.display = "none";
  tableMonedas.style.display = "block";
}
