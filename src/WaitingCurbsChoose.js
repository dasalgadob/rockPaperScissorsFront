import { Col, Modal, Row } from "antd"
import loader from './img/loader.svg'
import curb from './img/curb_logo.png'
import getProperImage from "./utils"


const WaitingCurbsChoose = ({ loading, move }) => {
  console.log('WaitingCurbsChoose')
  return <Modal visible={loading} closable footer={null} width='879px'>
    <h3 style={{ fontSize: '32px', color: '#36006C', textAlign: 'center' }}>WAITING CURB’S CHOOSE</h3>
    <Row>
      <Col span={12}>
        <div>
          <img width={63} height={138} alt={`Loader`} src={getProperImage(move)} style={{ display: 'block', margin: 'auto', marginTop: '88px', marginBottom: '45px', }} />
          <span style={{ display: 'block', margin: 'auto', color: '#36006C', fontSize: '21px', textAlign: 'center' }}>Your Bet</span>
        </div>
      </Col>
      <Col span={12}>
        <div>
          <img width={64} height={10} alt={`Loader`} src={loader} style={{ display: 'block', margin: 'auto', marginTop: '162px' }} />
          <img width={75} height={23} alt={`curb`} src={curb} style={{ display: 'block', margin: 'auto', marginTop: '107px', marginBottom: '69px' }} />
        </div>
      </Col>
    </Row>
  </Modal>
}

export default WaitingCurbsChoose