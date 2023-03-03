class Task {
  #title;

  #description;

  #dueDate;

  #priority;

  #completed = false;

  constructor(title, description, dueDate, priority) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
  }

  get title() {
    return this.#title;
  }

  get description() {
    return this.#description;
  }

  get dueDate() {
    return this.#dueDate;
  }

  get priority() {
    return this.#priority;
  }

  get completed() {
    return this.#completed;
  }

  toggleCompleted() {
    this.#completed = !this.#completed;
  }
}

export default Task;
