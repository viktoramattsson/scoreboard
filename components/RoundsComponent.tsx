import React, { useContext, useState, useEffect } from 'react';
import PlayersModal from './PlayersModal';
import AppContext from './AppContext';
import PlayerScoresContext from './PlayerScoresContext';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

import s from './RoundsComponent.module.css';
// varför hittas inte CSS-fieln??

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface Round {
  id: number,
  scores: number[]
}

function RoundsComponent() {
  const context = useContext(AppContext);
  const scoreContext = useContext(PlayerScoresContext);

  const { playerName } = context;

  const [rounds, setRounds] = useState<Round[]>([{ id: 1, scores: [] }]);
  const [currentRound, setCurrentRound] = useState<number>(1);
  const router = useRouter();

  const { setPlayerName } = useContext(AppContext);
  const { setPlayerScores } = useContext(PlayerScoresContext);

  useEffect(() => {
    if (playerName && playerName.length > 0) {
      function calculateTotalScore(playerIndex: number) {
        return rounds.reduce((total, round) => {
          const score = round.scores[playerIndex];
          return total + (score ? parseInt(score) : 0);
        }, 0);
      }

      const totalScores = playerName.map((_, playerIndex: number) =>
        calculateTotalScore(playerIndex)
      );
      setPlayerScores(totalScores);
    }
  }, [rounds, playerName, setPlayerScores]);

  function handleClickRestart() {
    setRounds([{ id: 1, scores: [] }]);
  }

  function handleTotal() {}

  function handleEndGame() {
    router.push('/'); // Playersmodal visas kort. störande!
    setPlayerName([]);
    setRounds([{ id: 1, scores: [] }]);
  }

  function addRound() {
    setRounds((prevRounds) => [
      ...prevRounds,
      { id: prevRounds.length + 1, scores: [] },
    ]);
    setCurrentRound(rounds.length + 1);
  }

  function handleScoreChange(roundIndex: number, playerIndex: number, score: number) {
    const updatedRounds = [...rounds];
    updatedRounds[roundIndex].scores[playerIndex] = score || 0;
    setRounds(updatedRounds);
  }

  return (
    <>
      {context.playerName.length === 0 && <PlayersModal />}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {rounds.map((round) => (
                <TableCell
                  style={{
                    textAlign: 'center',
                  }}
                  key={round.id}
                >
                  R {round.id}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {playerName.map((name, playerIndex) => (
              <TableRow key={playerIndex}>
                <TableCell style={{ fontSize: '2rem', maxWidth: '20%' }}>
                  {name}
                </TableCell>
                {rounds.map((round, roundIndex) => (
                  <TableCell
                    style={{
                      textAlign: 'center',
                    }}
                    key={roundIndex}
                  >
                    <input
                      style={{
                        width: '2.5rem',
                        fontSize: '2rem',
                        textAlign: 'center',
                      }}
                      type="number"
                      value={rounds[roundIndex]?.scores[playerIndex] || ''}
                      onChange={(e) =>
                        handleScoreChange(
                          roundIndex,
                          playerIndex,
                          e.target.valueAsNumber || 0
                        )
                      }
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={s.buttonContainer}>
        <Button className={s.btn} variant="text" onClick={addRound}>
          Add Round
        </Button>
        <Button className={s.btn} variant="text" onClick={handleClickRestart}>
          Restart
        </Button>
        <Button className={s.btn} variant="text" onClick={handleTotal}>
          See Total
        </Button>
        <Button className={s.btn} variant="text">
          Save Game
        </Button>
        <Button className={s.btn} variant="text" onClick={handleEndGame}>
          End Game
        </Button>
      </div>
    </>
  );
}

export default RoundsComponent;
