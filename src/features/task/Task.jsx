import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Switch, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateTask } from "../listTask/ListTaskSlice";
import { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Task = (props) => {
  const dispatch = useDispatch();
  const [switchState, setSwitchState] = useState(props.task.isDone);
  const [descriptionState, setDescriptionState] = useState(
    props.task.description
  );
  const [textDisabled, setTextDisabled] = useState(true);

  const handleSwitchChange = (event) => {
    setSwitchState(!switchState);
  };

  const handleDescChange = (event) => {
    setDescriptionState(event.target.value);
  };

  const handleSubmit = (e) => {
    dispatch(
      updateTask({
        id: props.task.id,
        description: descriptionState,
        isDone: switchState,
      })
    );
    setTextDisabled(!textDisabled);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.secondary,
    height: 70,
    cursor: "pointer",
    margin: "10px 0",
  }));

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <Item elevation={3}>
        <Switch onChange={handleSwitchChange} checked={switchState} />
        <div
          style={{
            margin: "0 10px",
            display: "flex",
            alignItems: "center",
            flex: "1",
          }}
        >
          <TextField
            onChange={handleDescChange}
            sx={{ width: "100%" }}
            value={descriptionState}
            variant="standard"
            disabled={textDisabled}
          />
          <CheckCircleIcon onClick={handleSubmit} sx={{ margin: "0 5px" }} />
        </div>
        <ModeEditIcon
          sx={{ margin: "0 7px" }}
          onClick={() => setTextDisabled(!textDisabled)}
        />
      </Item>
    </div>
  );
};

export default Task;
