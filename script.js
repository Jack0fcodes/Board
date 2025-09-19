import { createTodoCard } from './cards/todo.js';
import { createReminderCard } from './cards/reminder.js';
import { createMoodCard } from './cards/mood.js';
import { createHabitCard } from './cards/habit.js';

const addCardBtn = document.getElementById("addCardBtn");
const cardModal = document.getElementById("cardModal");
const closeModal = document.getElementById("closeModal");
const board = document.getElementById("board");

// Modal toggle
addCardBtn.addEventListener("click", () => {
  cardModal.classList.remove("hidden");
});
closeModal.addEventListener("click", () => {
  cardModal.classList.add("hidden");
});

// Add card
document.querySelectorAll("[data-type]").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;
    let card;

    if (type === "todo") card = createTodoCard();
    if (type === "reminder") card = createReminderCard();
    if (type === "mood") card = createMoodCard();
    if (type === "habit") card = createHabitCard();

    if (card) {
      enableDrag(card);
      board.appendChild(card);
    }

    cardModal.classList.add("hidden");
  });
});

// ---- DRAG & DROP LOGIC ----
function enableDrag(card) {
  card.setAttribute("draggable", true);

  card.addEventListener("dragstart", () => {
    card.classList.add("dragging");
  });

  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
  });
}

board.addEventListener("dragover", (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(board, e.clientY);
  const dragging = document.querySelector(".dragging");
  if (afterElement == null) {
    board.appendChild(dragging);
  } else {
    board.insertBefore(dragging, afterElement);
  }
});

// Helper: find where to insert dragged card
function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".card:not(.dragging)")];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}
