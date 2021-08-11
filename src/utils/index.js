import Rock from '../img/Rock.svg'
import Paper from '../img/Paper.svg'
import Scissors from '../img/Scissors.svg'

const getProperImage = (move) => {
  console.log(move)
  return move === 'Rock' ? Rock : move === 'Paper' ? Paper : Scissors
}

export default getProperImage