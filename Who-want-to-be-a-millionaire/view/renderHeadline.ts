const usersFromLocalStorage: User = getUsers();

const root = document.querySelector(".container__headline");
if (!root) throw new Error("Could not find root element");
window.onload = () => {
  root.innerHTML = `<h2>Hello ${usersFromLocalStorage[0].userName}</h2><h3>Welcome to: Who Wants to Be a Millionaire?</h3>`;
};
