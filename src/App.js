import useAxios from 'axios-hooks';
import PlayerMove from './PlayerMove';
import './App.css';
import { Row } from 'antd';
import WaitingCurbsChoose from './WaitingCurbsChoose';
import { useEffect, useState } from 'react';
import GameResult from './GameResult'

function App() {
  const [userMove, setUserMove ] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [serverResult, setServerResult] = useState({})
  const [{ data, loading, error }, refetch] = useAxios({
    url: `http://localhost:3000/games/create?user_move=${userMove ? userMove.toLowerCase() : ''}`,
    method: 'POST'
  }, {
    manual: true
  })

  useEffect(() => {
    if (data) {
      setIsVisible(true)
      setServerResult(data)
    }
  }, [data])

  useEffect(() => {
    if (userMove) {
      refetch()
    }
  }, [userMove])

  const handleOk = e => {
    console.log('handleOk')
    setUserMove(null)
    setIsVisible(false)
    setServerResult({})
  };

  if (loading) {
    return <WaitingCurbsChoose loading move={userMove} />
  }
  if (error) {
    return <>Error</>
  }
  return (
    <>
      <GameResult isVisible={isVisible} data={serverResult} userMove={userMove} handleOk={handleOk} />
      <h1>ROCK - PAPER -SCISSORS</h1>
      <p>Rock Paper Scissors is a zero sum game that is usually played by two people using their hands
        and no tools. The idea is to make shapes with an outstreched hand where each shape will have a
        certain degree of power and will lead to an outcome</p>
      <h2>SELECT YOUR BET</h2>
      <Row style={{  display: 'flex', justifyContent: 'center', marginTop: '65px' }}>
        <PlayerMove move={'Rock'} setUserMove={setUserMove}></PlayerMove>
        <PlayerMove move='Paper' setUserMove={setUserMove}></PlayerMove>
        <PlayerMove move={'Scissors'} setUserMove={setUserMove}></PlayerMove>
      </Row>
    </>
  );
}

export default App;
