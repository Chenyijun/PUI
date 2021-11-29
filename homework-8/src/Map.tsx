import React, {FC} from 'react';
import {MapWrapper, Square, Attack} from './components/mapComponents'

type Props = {
  justify?: string;
}
const Map:FC<Props> = ({justify}) => {
  return (
    <>
    <MapWrapper>
      <Attack justify={justify}>ATTACK</Attack>
    </MapWrapper>
    <MapWrapper>
      <Square player>1</Square>
      <Square>2</Square>
      <Square>3</Square>
      <Square>4</Square>
      <Square>5</Square>
      <Square>6</Square>
      <Square>7</Square>
      <Square>8</Square>
      <Square monster>9</Square>
    </MapWrapper>
    </>
  )
}

export default Map;
