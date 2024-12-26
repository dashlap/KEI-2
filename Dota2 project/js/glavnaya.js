
    document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.getElementById("snow-container");

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❅"; // Можно заменить на другой символ снежинки
    snowflake.style.left = `${Math.random() * 100}vw`; // Генерация случайного положения по ширине
    snowflake.style.animationDuration = `${3 + Math.random() * 5}s`; // Случайная продолжительность падения
    snowflake.style.fontSize = `${10 + Math.random() * 20}px`; // Разная величина снежинок
    snowflake.style.opacity = `${0.4 + Math.random() * 0.6}`; // Полупрозрачные снежинки

    snowContainer.appendChild(snowflake);

    // Удаляем снежинку после завершения анимации
    setTimeout(() => {
      snowflake.remove();
    }, 8000);
  }

  // Создание снежинок каждые 100мс
  setInterval(createSnowflake, 150);
});



    // Выбираем все карточки с классом "gift"
    document.querySelectorAll('.gift').forEach(gift => {
        gift.addEventListener('click', () => {
            // Добавляем класс "received" для затемнения и добавления надписи
            gift.classList.add('received');
        });
    });
