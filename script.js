function simpanCatatan() {
  const catatan = document.getElementById("note").value;
  localStorage.setItem("catatanku", catatan);
  alert("Catatan disimpan!");
}

window.onload = () => {
  const catatan = localStorage.getItem("catatanku");
  if (catatan) {
    document.getElementById("note").value = catatan;
  }
};