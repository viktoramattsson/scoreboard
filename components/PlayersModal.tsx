// import * as React from 'react';
import React, { useContext, useState } from "react";
import {
  Button,
  Stack,
  TextField,
  Box,
  Typography,
  Modal,
} from "@mui/material";
import AppContext from "./AppContext";

type Player = string

// hur löser jag boxshadow?
const style: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "70vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function PlayersModal() {
  const { setPlayerName } = useContext(AppContext); // hjälp!!!!!!!

  const [open, setOpen] = useState<boolean>(true);

  const [playerFields, setPlayerFields] = useState<{ id: number }[]>([
    { id: 1 },
  ]);;

  const [players, setPlayers] = useState<Player[]>([]);

  const handleClose = () => {
    setOpen(false);
    setPlayerName(players);
  };

  function addPlayerField() {
    setPlayerFields((prevFields) => [...prevFields, { id: prevFields.length + 1 }]);
  }

  const handlePlayerNameChange = (index: number, value: string) => {
    const updatedPlayers = [...players];

    updatedPlayers[index] = value.charAt(0).toUpperCase() + value.slice(1);
    setPlayers(updatedPlayers);
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Stack spacing={2}>
              {playerFields.map((field, index) => (
                <TextField
                  fullWidth
                  inputProps={{
                    style: { textAlign: "center", textTransform: "capitalize" },
                  }}
                  key={field.id}
                  label={`Player ${index + 1}`}
                  onChange={(event) =>
                    handlePlayerNameChange(index, event.target.value)
                  }
                />
              ))}
            </Stack>

            <Button variant="text" onClick={addPlayerField}>
              {" "}
              Add Player
            </Button>
            <Button variant="text" onClick={handleClose}>
              Start
            </Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default PlayersModal;
