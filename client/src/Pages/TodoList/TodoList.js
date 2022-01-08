import { Add, DeleteForever } from "@material-ui/icons";
import { useState } from "react";

function TodoList() {
  const [job, setJob] = useState();
  const [jobs, setJobs] = useState(() => {
    const jobsData = JSON.parse(localStorage.getItem("jobs"));
    return jobsData || [];
  });
  function changeHandle(e) {
    setJob(e);
  }

  function handleClick() {
    setJobs((prev) => {
      const newJobs = [...prev, job];
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;
    });
    setJob(" ");
  }

  function deleteJob(idx) {
    setJobs(() => {
      const data = jobs.filter((job, index) => {
        return index !== idx;
      });
      localStorage.setItem("jobs", JSON.stringify(data));
      return data;
    });
  }
  return (
    <div className="main">
        <div className="todo-top">
            <h2>TODOLIST</h2>
        </div>
        <div className="todo-main">
            <input value={job} placeholder="Write something!" onChange={(e) => changeHandle(e.target.value)} />
            <Add onClick={handleClick}></Add>
        </div>
        <ul>
            {jobs.map((job, index) => (
            <li key={index} >
                {job}
                <div>
                  <DeleteForever
                  onClick={() => {
                      deleteJob(index);
                  }}
                  />
                  <span>edit</span>
                </div>
                
            </li>
            ))}
        </ul>
    </div>
  );
}

export default TodoList;