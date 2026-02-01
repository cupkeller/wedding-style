// Показ блока "Спасибо" после отправки формы
const form = document.getElementById("rsvpForm");
const thanks = document.getElementById("thanks");
const backBtn = document.getElementById("backBtn");

if (form && thanks && backBtn) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();           // не отправляем форму на сервер
    form.style.display = "none";  // скрываем форму
    thanks.style.display = "block"; // показываем "Спасибо"
  });

  backBtn.addEventListener("click", function () {
    thanks.style.display = "none";
    form.style.display = "block";
  });
}
