document.getElementById("openMenuBtn").addEventListener("click", () => {
  document.querySelector(".menu").style.display = "flex";
});

document.getElementById("closeMenuBtn").addEventListener("click", () => {
  document.querySelector(".menu").style.display = "none";
});

document.querySelector(".gallery__btn").addEventListener("click", () => {
  const hiddenItems = document.querySelectorAll(
    ".gallery__item.--4, .gallery__item.--5"
  );
  hiddenItems.forEach((item) => {
    item.style.display = "grid";
  });
  document.querySelector(".gallery__btn").style.display = "none";
});

document
  .querySelector(".contacts__feedback-btn")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.querySelector(".contacts__feedback");

    if (form.checkValidity()) {
      const fields = form.querySelectorAll(".contacts__feedback-field");
      fields.forEach((field) => {
        field.value = "";
      });
    } else {
      form.reportValidity();
    }
  });
