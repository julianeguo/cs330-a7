// document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".plus-btn");

//   buttons.forEach(btn => {
//     btn.addEventListener("click", () => {
//       const course = btn.dataset.course;  // ex. "cs110"

//       // Locate all slots in the schedule for this course
//       const slots = document.querySelectorAll(`.${course}`);

//       slots.forEach(slot => {
//         slot.style.display = "table-cell";   // reveal the class block
//       });
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".plus-btn");
  const popup = document.getElementById("popup");
  let popupTimeout;

  function showPopup() {
    popup.classList.remove("hidden");
    popup.classList.add("show");

    clearTimeout(popupTimeout);
    popupTimeout = setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => popup.classList.add("hidden"), 300);
    }, 1500);
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const course = btn.dataset.course;  // ex. "cs110"
      if (!course) return;

      const slots = document.querySelectorAll(`.${course}`);
      slots.forEach(slot => {
        slot.style.display = "table-cell";
      });

      showPopup();
    });
  });
});

