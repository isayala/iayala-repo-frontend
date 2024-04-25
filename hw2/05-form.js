// Add your code here
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const modalBody = document.querySelector(".modal-body");
  const modal = new bootstrap.Modal(document.getElementById("modal"));

  const fullNameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const registrationStatusInput = document.getElementById("registration");
  const programmingLanguagesCheckbox = document.getElementById(
    "programmingLanguages"
  );
  const operatingSystemsCheckbox = document.getElementById("operatingSystems");
  const fullStackCheckbox = document.getElementById("fullStack");
  const additionalInfoInput = document.getElementById("additionalInfo");

  form.addEventListener("submit", function (event) {
    // Prevent empty submission
    event.preventDefault();
    // Clear previous modal content
    modalBody.innerHTML = "";

    appendToModal("Full Name:", fullNameInput.value);
    appendToModal("Email:", emailInput.value);
    appendToModal("Registration Status:", registrationStatusInput.value);

    const coursesTaken = [];
    if (programmingLanguagesCheckbox.checked) {
      coursesTaken.push("Programming Languages");
    }
    if (operatingSystemsCheckbox.checked) {
      coursesTaken.push("Operating Systems");
    }
    if (fullStackCheckbox.checked) {
      coursesTaken.push("Full Stack Web Development");
    }
    appendToModal("Courses Taken:", coursesTaken.join(", "));

    appendToModal("Anything Else?", additionalInfoInput.value);

    modal.show();
  });

  function appendToModal(label, value) {
    const row = document.createElement("div");
    row.classList.add("row", "mb-2");
    row.innerHTML = `
            <div class="col-sm-4 fw-bold">${label}</div>
            <div class="col-sm-8">${value}</div>
        `;
    modalBody.appendChild(row);
  }

  const resetButton = document.querySelector('[type="reset"]');
  resetButton.addEventListener("click", function () {
    form.reset();
  });
});
