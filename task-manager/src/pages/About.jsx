import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container>
      <Typography variant="h4" my={2}>
        About
      </Typography>

      <Typography>
        This app helps you manage tasks with priority, due dates, and a
        responsive interface. Built using React, Material UI, and the
        Context API.
        This is another test for using GIT
      </Typography>
    </Container>
  );
}
