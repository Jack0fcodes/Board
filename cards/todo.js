export function createTodoCard() {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h4>Todo List</h4>
    <ul>
      <li>Example Task</li>
    </ul>
  `;
  return card;
}
