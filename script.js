const form = document.getElementById("rsvpForm");
const thanks = document.getElementById("thanks");
const backBtn = document.getElementById("backBtn");

if (form && thanks && backBtn) {
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // предотвращаем стандартный редирект

    // Отправка формы через fetch (Formsubmit принимает обычный POST)
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data
    })
    .then(response => {
      // Показываем блок "Спасибо" после успешной отправки
      form.style.display = "none";
      thanks.style.display = "block";
      // Сбрасываем форму
      form.reset();
    })
    .catch(err => {
      alert("Ошибка отправки формы: " + err);
    });
  });

  backBtn.addEventListener("click", function() {
    thanks.style.display = "none";
    form.style.display = "block";
  });
}
