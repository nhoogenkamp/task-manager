import {
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useTasks } from "../context/TaskContext";

export default function TaskList() {
  const { tasks, setTasks } = useTasks();

  const handleDelete = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <List>
      {tasks.map((item, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton edge="end" onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={`${item.task} (Priority: ${item.priority})`}
            secondary={`Due: ${item.due || "—"}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
