import { useState } from "react";

type Todo = { id?: string; content?: string };

const DetailView = ({
  data,
  onEdit,
}: {
  data: Todo;
  onEdit: (todo: Todo) => void;
}) => {
  return (
    <tr>
      <td>{data.content}</td>
      <td>
        <button type="button" onClick={() => onEdit(data)}>
          Edit
        </button>
      </td>
    </tr>
  );
};

const FormView = ({
  editing,
  onSubmit,
  onDelete,
}: {
  editing: Todo;
  onSubmit: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const input = Object.fromEntries(data.entries()) as Todo;
    onSubmit({
      ...input,
      id: input.id || (Math.random() + 1).toString(36).substring(7),
    });
  };

  const handleDelete = () => {
    onDelete(editing);
  };

  return (
    <>
      <h3>{editing.id ? "Update" : "Create New"}</h3>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={editing.id} />
        <input
          name="content"
          type="text"
          placeholder="Post content"
          defaultValue={editing.content}
        />
        <button type="submit">{editing.id ? "Update" : "Create"}</button>
        {editing.id && (
          <button type="button" className="secondary" onClick={handleDelete}>
            Delete
          </button>
        )}
      </form>
    </>
  );
};

export const Todo = () => {
  const [editing, setEditing] = useState<false | Todo>(false);
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", content: "Todo 1" },
    { id: "2", content: "Todo 2" },
  ]);

  const handleSubmit = (editing: Todo) => {
    setTodos([...todos, editing]);
    setEditing(false);
  };

  const handleDelete = (editing) => {
    setTodos(todos.filter((todo) => todo.id !== editing.id));
    setEditing(false);
  };

  return (
    <>
      <nav>
        <strong>Todo</strong>
        <ul>
          <li>
            <button
              type="button"
              onClick={() => setEditing({ id: null, content: "" })}
            >
              New Todo
            </button>
          </li>
        </ul>
      </nav>
      <main>
        {editing !== false && (
          <dialog key={editing.id} open>
            <article>
              <button aria-label="Close" onClick={() => setEditing(false)} />
              <FormView
                editing={editing}
                onSubmit={handleSubmit}
                onDelete={handleDelete}
              />
            </article>
          </dialog>
        )}
        <figure>
          <table role="grid">
            <tbody>
              {todos.map((todo) => (
                <DetailView
                  key={todo.id}
                  data={todo}
                  onEdit={(todo) => setEditing(todo)}
                />
              ))}
            </tbody>
          </table>
        </figure>
      </main>
    </>
  );
};

export default {
  title: "Pages/Todo",
};
