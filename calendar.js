document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".plus-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const course = btn.dataset.course;  // ex. "cs110"

      // Locate all slots in the schedule for this course
      const slots = document.querySelectorAll(`.${course}`);

      slots.forEach(slot => {
        slot.style.display = "table-cell";   // reveal the class block
      });
    });
  });
});
