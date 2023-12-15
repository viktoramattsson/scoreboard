import { Modal, Button, Box } from "@mui/material";
import React, { useContext, useState } from "react";
import AppContext from "./AppContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  height: "40vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ResumeResetComponent() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const context = useContext(AppContext);
  const { setPlayerName } = useContext(AppContext);

  function handelReset() {
    setPlayerName([]);
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>You have an active session</h1>
          <Button variant="text" onClick={handleClose}>
            Resume
          </Button>
          <Button variant="text">Reset</Button>
        </Box>
      </Modal>
    </>
  );
}

export default ResumeResetComponent;
