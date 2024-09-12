# Todo list

This is a Todo list application built with Vue.js. The project showcases the use of Vue Router and Vue components to manage a list of tasks with functionalities including adding, deleting, and marking tasks as complete. The application consists of two pages:
 1. **Home Page**: displays a header and a link to navigate to the Todo list page.
 2. **Todo List Page**: allows users to return to the Home page, add tasks, mark tasks as complete and delete tasks. It also features buttons to mark all tasks as done and delete all tasks.

## Demo
You can try the Todo list application online [here](https://afkeomre.github.io/todo-list/).
If you want to see how it works, watch the [screencast](https://drive.google.com/file/d/1zmKI2aaynbGC32YA5X3Wrpde1Qq8H9qL/view).

## Features
 - **Task Addition**: enter a task in the input field and click the add button to add it to the list.
 - **Task Management**:
   - **Checkbox**: mark tasks as complete; completed tasks will be crossed out.
   - **Delete Button**: remove individual tasks from the list.
   - **All Done Button**: mark all tasks as complete.
   - **Delete All Button**: remove all tasks from the list.
 - **Dynamic List**: tasks are numbered, and the numbering adjusts automatically when tasks are deleted from the list.
 - **Empty State**: displays a message when the list is empty, both before any tasks are added and after all tasks have been deleted.

## Technologies Used
 - **Vue.js**: JavaScript framework for building the user interface.
 - **Vue Router**: manages navigation between the Home page and Todo list page.
 - **Vue Components**: modular components for better organization and reusability.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
