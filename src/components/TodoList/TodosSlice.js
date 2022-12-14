const initState = [
  {
    id: 1,
    name: "Learn English",
    completed: false,
    priority: "Medium",
    description: "This is content",
    time: "2022-11-15 11:35:58",
  },
  {
    id: 2,
    name: "Learn Redux",
    completed: true,
    priority: "High",
    description: "This is content",
    time: "2022-11-15 11:35:58",
  },
  {
    id: 3,
    name: "Learn JavaScript",
    completed: false,
    priority: "Low",
    description: "This is content",
    time: "2022-11-15 11:35:58",
  },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      state = [...state, action.payload];
      return state;

    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "todoList/delete":
      const contactFilter = state.filter((contact) =>
        contact.id === action.payload ? null : contact
      );
      state = contactFilter;
      return state;
    case "todoList/update":
      const contactUpdate = state.filter((contact) =>
        contact.id === action.payload.id
          ? Object.assign(contact, action.payload)
          : contact
      );
      state = contactUpdate;
      return state;
    default:
      return state;
  }
};

export default todoListReducer;
