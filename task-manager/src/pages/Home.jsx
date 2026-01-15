import { Container, Typography } from "@mui/material";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" my={2}>
        My Tasks
      </Typography>

      <AddTask />
      <TaskList />
    </Container>
  );
}
