const clickButton = document.getElementById("clickButton");
const nameInput = document.getElementById("nameInput");
const colorSelect = document.getElementById("colorSelect");
const userForm = document.getElementById("userForm");
const emailInput = document.getElementById("emailInput");
const hoverBox = document.getElementById("hoverBox");

const outputText = document.getElementById("outputText");
const typingOutput = document.getElementById("typingOutput");
const keyOutput = document.getElementById("keyOutput");
const selectOutput = document.getElementById("selectOutput");
const formOutput = document.getElementById("formOutput");
const mouseOutput = document.getElementById("mouseOutput");

clickButton.addEventListener("click", function () {
  outputText.textContent = "Tombol berhasil diklik.";
});

nameInput.addEventListener("input", function () {
  typingOutput.textContent = "Anda sedang mengetik: " + nameInput.value;
});

colorSelect.addEventListener("change", function () {
  selectOutput.textContent = "Warna favorit yang dipilih: " + colorSelect.value;
});

userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formOutput.textContent = "Formulir berhasil dikirim dengan email: " + emailInput.value;
});

nameInput.addEventListener("keyup", function (event) {
  keyOutput.textContent = "Tombol terakhir yang diketik: " + event.key;
});

hoverBox.addEventListener("mouseover", function () {
  hoverBox.classList.add("active");
  mouseOutput.textContent = "Mouse masuk ke area kotak.";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.classList.remove("active");
  mouseOutput.textContent = "Mouse keluar dari area kotak.";
});

nameInput.addEventListener("focus", function () {
  nameInput.classList.add("highlight");
  outputText.textContent = "Kolom nama sedang aktif.";
});

nameInput.addEventListener("blur", function () {
  nameInput.classList.remove("highlight");
  outputText.textContent = "Kolom nama tidak aktif.";
});