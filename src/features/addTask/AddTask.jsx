import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { toggleForm } from "./AddTaskSlice";
import { addNewTask } from "../listTask/ListTaskSlice";

const AddTask = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
  };

  const isOpen = useSelector((state) => state.addTask.toggle);
  const tasks = useSelector((state) => state.tasks);
  const [description, setDescription] = React.useState("");
  const dispatch = useDispatch();
  const handleAction = () => dispatch(toggleForm(!isOpen));
  const handleSubmit = () => {
    dispatch(
      addNewTask({
        id: tasks.length + 1,
        description: description,
        isDone: false,
      })
    );
    handleAction();
  };
  return (
    <div>
      <div>
        <Modal
          open={isOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <TextField
              sx={{ margin: "10px 0" }}
              id="outlined-required"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                onClick={handleSubmit}
                sx={{ marginRight: 3 }}
                variant="outlined"
              >
                Submit
              </Button>
              <Button onClick={handleAction} variant="outlined">
                Cancel
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AddTask;
