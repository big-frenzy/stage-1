document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("goalForm");
  const goalInput = document.getElementById("goalInput");
  const goalList = document.getElementById("goalList");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Create new goal element
    const newGoal = document.createElement("div");
    newGoal.classList.add("goal-item");
    newGoal.textContent = goalInput.value;

    // Append new goal to goal list
    goalList.appendChild(newGoal);

    // Clear input field
    goalInput.value = "";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("goalForm");
  const goalInput = document.getElementById("goalInput");
  const goalList = document.getElementById("goalList");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Create new goal element
    const newGoal = document.createElement("div");
    newGoal.classList.add("goal-item");
    newGoal.textContent = goalInput.value;

    // Append new goal to goal list
    goalList.appendChild(newGoal);

    // Clear input field
    goalInput.value = "";
  });
});
