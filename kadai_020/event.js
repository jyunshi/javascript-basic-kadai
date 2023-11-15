const btn = document.getElementById("btn");

const text3 = document.getElementById("text");

const text4 = document.getElementById("text2");

btn.addEventListener("click", () => {
  text3.style.display = "none";
  const newText = document.createElement("h2");
  newText.textContent = "ボタンをクリックしました";

  text4.appendChild(newText);
});
