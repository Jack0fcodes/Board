document.getElementById("addCardBtn").addEventListener("click", () => {
  document.getElementById("cardOptions").classList.toggle("hidden");
});

document.querySelectorAll("#cardOptions button").forEach(btn => {
  btn.addEventListener("click", () => {
    const cardType = btn.dataset.card;
    addCard(cardType);
    document.getElementById("cardOptions").classList.add("hidden");
  });
});

function addCard(type) {
  const board = document.getElementById("board");
  const card = document.createElement("div");
  card.classList.add("card");

  switch(type) {
    case "todo":
      card.innerHTML = `
        <h3>To-Do</h3>
        <ul>
          <li><input type="checkbox"> Sample Task</li>
        </ul>
      `;
      break;
    case "reminder":
      card.innerHTML = `
        <h3>Reminder</h3>
        <p>No reminders yet</p>
      `;
      break;
    case "habit":
      card.innerHTML = `
        <h3>Habit Tracker</h3>
        <label><input type="checkbox"> Writing</label><br>
        <label><input type="checkbox"> Exercise</label>
      `;
      break;
    case "mood":
      card.innerHTML = `
        <h3>Mood</h3>
        <div>😀 🙂 😐 🙁 😢</div>
      `;
      break;
  }

  board.appendChild(card);
}
