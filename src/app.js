export function createApp(root) {
      const state = {
        todos: []
      };

      const render = () => {
        root.innerHTML = `
          <h1>Todo App</h1>
          <input type="text" id="todo-input" placeholder="Ajouter une nouvelle tâche">
          <button id="add-todo">Ajouter</button>
          <ul id="todo-list">
            ${state.todos.map(todo => `
              <li>
                ${todo}
                <button class="delete-todo">Supprimer</button>
              </li>
            `).join('')}
          </ul>
        `;

        document.getElementById('add-todo').addEventListener('click', addTodo);
        document.querySelectorAll('.delete-todo').forEach(button => {
          button.addEventListener('click', deleteTodo);
        });
      };

      const addTodo = () => {
        const input = document.getElementById('todo-input');
        if (input.value.trim()) {
          state.todos.push(input.value.trim());
          input.value = '';
          render();
        }
      };

      const deleteTodo = (event) => {
        const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
        state.todos.splice(index, 1);
        render();
      };

      render();
    }
