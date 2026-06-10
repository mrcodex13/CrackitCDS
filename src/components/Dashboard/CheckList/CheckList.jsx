import { useEffect, useState } from "react";
import "./CheckList.css";

function CheckList() {

  /* ======================================================
     INPUT FIELD STATE
     ------------------------------------------------------
     Stores whatever the user is currently typing.
     ====================================================== */
  const [task, setTask] = useState("");


  /* ======================================================
     TASK LIST STATE
     ------------------------------------------------------
     Load tasks from localStorage when component starts.
     If nothing exists, start with an empty array.
     ====================================================== */
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });


  /* ======================================================
     SAVE TO LOCAL STORAGE
     ------------------------------------------------------
     Every time 'tasks' changes, automatically save it.
     This allows tasks to survive page refreshes.
     ====================================================== */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  /* ======================================================
     ADD NEW TASK
     ------------------------------------------------------
     1. Prevent empty tasks.
     2. Create a unique id.
     3. Add task to state.
     4. Clear input field.
     ====================================================== */
  function addTask() {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  }


  /* ======================================================
     DELETE TASK
     ------------------------------------------------------
     Remove task whose id matches.
     filter() creates a new array without that task.
     ====================================================== */
  function deleteTask(id) {
    setTasks(
      tasks.filter((t) => t.id !== id)
    );
  }


  /* ======================================================
     TOGGLE COMPLETE / INCOMPLETE
     ------------------------------------------------------
     map() loops through every task.
     If ids match, flip completed state.
     ====================================================== */
  function toggleTask(id) {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
            }
          : t
      )
    );
  }


  /* ======================================================
     UI
     ====================================================== */
  return (
    <div className="checklist-container">

      <div className="checklist-card glass-card">

        <h2>Today's Tasks</h2>


        {/* ===============================
            INPUT SECTION
           =============================== */}

        <div className="input-area">

          <input
            type="text"
            placeholder="Add a task..."
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />

          <button
            type="button"
            className="bubbly-btn bubbly-btn--pill"
            onClick={addTask}
          >
            Add
          </button>

        </div>


        {/* ===============================
            TASK LIST
           =============================== */}

        <ul>

          {tasks.map((t) => (

            <li key={t.id}>

              {/* Complete Checkbox */}

              <input
                type="checkbox"
                checked={t.completed}
                onChange={() =>
                  toggleTask(t.id)
                }
              />


              {/* Task Text */}

              <span
                className={
                  t.completed
                    ? "completed"
                    : ""
                }
              >
                {t.text}
              </span>


              {/* Delete Button */}

              <button
                type="button"
                className="delete-btn bubbly-btn bubbly-btn--round"
                onClick={() => deleteTask(t.id)}
                aria-label="Delete task"
              >
                ✕
              </button>

            </li>

          ))}

        </ul>

      </div>

    </div>
  );
}

export default CheckList;