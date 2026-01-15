import { useState } from "react";
import { TextField, Button, Box, MenuItem } from "@mui/material";
import { useTasks } from "../context/TaskContext";

export default function AddTask() {
  const { setTasks } = useTasks();

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [due, setDue] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      setTasks((prev) => [...prev, { task, priority, due }]);
      setTask("");
      setPriority("Normal");
      setDue("");
    }
  };

  return (
    <Box display="flex" gap={2} my={2} flexDirection="column">
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <TextField
        label="Due Date"
        type="date"
        value={due}
        onChange={(e) => setDue(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        label="Priority"
        select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <MenuItem value="Low">Low</MenuItem>
        <MenuItem value="Normal">Normal</MenuItem>
        <MenuItem value="High">High</MenuItem>
      </TextField>

      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Box>
  );
}
