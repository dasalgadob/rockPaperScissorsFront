import { Button, Modal } from "antd"
import getProperImage from "./utils"


const getServerResultAsString = (result) => {
  return result === 'win' ? 'WON' : result === 'lose' ? 'LOST' : 'TIE'
}

const getServerResultAsLowerString = (result) => {
  return result === 'win' ? 'loses' : result === 'lose' ? 'wins' : 'ties'
}

const capitalizeFirstLetter = (string) => {
  return string.length > 0 ? string.charAt(0).toUpperCase() + string.slice(1) : ''
}

const GameResult = ({ isVisible, data, handleOk }) => {
  return <Modal visible={isVisible} closable width='492px' onOk={handleOk} onCancel={handleOk}
    footer={[
      <Button key="ok" onClick={handleOk} style={{ width: '352px', height: '73px', display: 'block', margin: 'auto', color: 'white', background: '#36006C' }}>
        OK
      </Button>]} >
      <div>
        <h3 style={{ fontSize: '32px', color: '#36006C', textAlign: 'center' }}>YOU {getServerResultAsString(data.result)}!</h3>
        <span style={{ display: 'block', margin: 'auto', fontSize: '21px', textAlign: 'center' }}>Curb with {data.server_move} {getServerResultAsLowerString(data.result)}</span>
        <img width={69} height={161} alt={`Move ${data.server_move}`} src={getProperImage(capitalizeFirstLetter(data.server_move || ''))} style={{ display: 'block', margin: 'auto', marginTop: '76px' }} />
      </div>

  </Modal >
}

export default GameResult