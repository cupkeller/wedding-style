// Показ блока "Спасибо" после отправки формы
const form = document.getElementById("rsvpForm");
const thanks = document.getElementById("thanks");
const backBtn = document.getElementById("backBtn");

if (form && thanks && backBtn) {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // отменяем стандартную отправку формы

    // Отправка через fetch на Formsubmit
    const data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: data
    })
    .then(() => {
      form.style.display = "none";   // скрываем форму
      thanks.style.display = "block"; // показываем "Спасибо"
    })
    .catch(err => alert("Ошибка отправки: " + err));
  });

  backBtn.addEventListener("click", function() {
    thanks.style.display = "none";
    form.style.display = "block";
  });
}
