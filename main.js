function kiemTraSoChanLe() {
    let so = document.getElementById("soNhap").value;
    let ketQua = document.getElementById("ketQua");
    if (so % 2 === 0) {
        ketQua.textContent = "Số chẵn";
    } else {
        ketQua.textContent = "Số lẻ";
    }
}