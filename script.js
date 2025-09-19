// Sample placeholder data
const sampleData = {
  todo: ["Finish design mockup", "Update GitHub repo", "Reply to client"],
  reminder: ["Meeting at 3PM", "Drink water", "Check emails"],
  habit: ["Walk 500 steps", "Read 20 mins", "Journal writing"],
  mood: "😊"
};

// Populate lists
window.addEventListener("DOMContentLoaded", () => {
  // To-do
  const todoList = document.getElementById("todo-list");
  sampleData.todo.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    todoList.appendChild(li);
  });

  // Reminders
  const reminderList = document.getElementById("reminder-list");
  sampleData.reminder.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    reminderList.appendChild(li);
  });

  // Habits
  const habitList = document.getElementById("habit-list");
  sampleData.habit.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    habitList.appendChild(li);
  });

  // Mood
  document.getElementById("mood-status").textContent = sampleData.mood;
});
