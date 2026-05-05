import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeDescription = (e) => setDescription(e.target.value);
  const handleAddTodo = () => props.addTodo(title, description);
  const handleReset = () => {
    setTitle('')
    setDescription('')
  }

  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography component="span">Add Todo</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack>
          <TextField
            label="Heading"
            size="small"
            value={title}
            onChange={handleChangeTitle}
          />
          <TextField
            label="Description"
            size="small"
            value={description}
            onChange={handleChangeDescription}
          />
        </Stack>
      </AccordionDetails>
      <AccordionActions>
        <Button onClick={handleAddTodo}>Add</Button>
        <Button onClick={handleReset}>Reset</Button>
      </AccordionActions>
    </Accordion>
  );
}

export default AddTodo;
