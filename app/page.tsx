"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [list, setList] = useState<string[]>([])
  useEffect(() => {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    setList(JSON.parse(saved));
  }
}, []);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(list));
}, [list]);

  const addTask = () => {
    if (task === "") return;
    setList([...list, task]);
    setTask("");
  };

  const deleteTask = (index: number) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h1>🚀 Smart Task Manager</h1>

      <input
  value={task}
  onChange={(e) => setTask(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      addTask();
    }
  }}
  placeholder="Enter task"
  style={{
    padding: "10px",
    color: "white",
    backgroundColor: "black",
    border: "1px solid white",
    caretColor: "white",
    marginRight: "10px"
  }}
/>

      <button onClick={addTask} style={{ padding: "8px" }}>
  Add
</button>

      <ul>
        {list.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => deleteTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}