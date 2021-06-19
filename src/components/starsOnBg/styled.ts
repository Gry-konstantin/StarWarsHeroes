import styled, { css, keyframes } from 'styled-components'
import startBg1 from "../../assets/images/star1.png"
import startBg2 from "../../assets/images/star2.png"
import startBg3 from "../../assets/images/star3.png"
import startBg4 from "../../assets/images/star4.png"
import startBg5 from "../../assets/images/star5.png"
import startBg6 from "../../assets/images/star6.png"
import startBg7 from "../../assets/images/star7.png"
import startBg8 from "../../assets/images/star8.png"

const getBackground = (index:number) => {
  switch(index){
    case 1: return startBg1
    case 2: return startBg2
    case 3: return startBg3
    case 4: return startBg4
    case 5: return startBg5
    case 6: return startBg6
    case 7: return startBg7
    case 8: return startBg8
  }
}

export const StyledStars = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #000200;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`

const animate = keyframes`
  0%,20%,40%,60%,80%,100%
 {
   opacity:0;
 }
 10%,30%,50%,70%,90%
 {
   opacity: 1;
 }
`
const backgroundMoveAnimate = keyframes`
  0%{transform: scale(1);} 
  100%{transform: scale(2);}
`
export const StyledStar = styled.div<{ index: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  animation: ${animate} 8s ease-in-out infinite, ${backgroundMoveAnimate} 16s linear infinite;
  ${({ index }) => css`
    animation-delay: ${-index + 1 + 's'};
    background: url(${getBackground(index)});
  `}
`
