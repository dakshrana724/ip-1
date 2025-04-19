const input = document.getElementById("destination-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("bucket-list");

// Add destination
addBtn.addEventListener("click", () => {
  const destination = input.value.trim();
  if (destination === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="destination-text">${destination}</span>
    <div>
      <button class="check-btn">✔️</button>
      <button class="delete-btn">🗑️</button>
    </div>
  `;
  
  list.appendChild(li);
  input.value = "";

  // Handle complete
  li.querySelector(".check-btn").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Handle delete
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });
});
