import { Card } from 'antd'
import getProperImage from './utils'

const PlayerMove = ({ move, setUserMove }) => {
  return <>
    <Card style={{ width: 243, height: 273 }} hoverable onClick={() => setUserMove(move)}>
      <img width={63} height={138} alt={`Move ${move}`} src={getProperImage(move)} style={{ display: 'block', margin: 'auto' }} />
      <span style={{ display: 'block', margin: 'auto', textAlign: 'center', color: '#36006C', fontSize: '24px', marginTop: '26px', fontFamily: 'Montserrat' }}>{move}</span>
    </Card>
  </>
}

export default PlayerMove