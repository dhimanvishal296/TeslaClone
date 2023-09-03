import React from 'react'
import Styled from 'styled-components';
import Header from './Header';
import Fade from 'react-reveal/Fade';
import './Model3.css';


const Navigation = ({ tittle, text1h, text1p, text2h, text2p, text3h, text3p, ButtonText, backgroundImg }) => {
  return (

    <Hero3 bgImage={backgroundImg}>
      <Header />
      <Fade bottom>
        <HeaderText>
          <h1> {tittle}</h1>
        </HeaderText>
      </Fade>

      <Textgroup>
        <Fade bottom>
          <Text1>
            <h1> {text1h}</h1>
            <p> {text1p}</p>
          </Text1>
        </Fade>

        <Fade bottom>
          <Text2>
            <h1>{text2h}</h1>
            <p>{text2p} </p>
          </Text2>
        </Fade>

        <Fade bottom>
          <Text3>
            <h1>{text3h}</h1>
            <p> {text3p} </p>
          </Text3>
        </Fade>
      { ButtonText &&
        <Fade bottom>
          <Text4>
            <button> {ButtonText}</button>
          </Text4>
        </Fade>
        } 

      </Textgroup>

    </Hero3>

  )
}

export default Navigation;



const Hero3 = Styled.div`
width:100vw;
height:150vh;
background-image:url("/images/Model-3-Main-Hero-Desktop-LHD.jpg");
background-position:center;
background-repeat:no-repeat;
background-size:cover;
display:flex;
object-fit: contain;
justify-content:space-between;
flex-direction:column;
background-image:${props => `url("/images/${props.bgImage}")`}
`


const Textgroup = Styled.div`
  display:flex;
  align-item:center;
  justify-content:space-between;
  margin: 600px auto;
  gap:5.2rem;
  
`
const Text1 = Styled.div`
h1,p{
  color:white;
//   opacity:0.85;
max-width:300px;
 }
`
const Text2 = Styled.div`
h1,p{
  display:flex;
  align-item:center;
  color:white;
//   opacity:0.85; 
max-width:300px;
 }
`
const Text3 = Styled.div`
 h1,p{
  color:white;
  max-width:300px;
 }
`
const Text4 = Styled.div`
 
 button
 {border:2px solid white;

cursor:pointer;
background-color: transparent;
 height:40px;
 width:200px;
 color:white;
 display:flex;
 justify-content:center;
 align-items:center;
 border-radius:5px;
 opacity:0.85;
 font-size:18px;
}

button:hover{
  background:white;
  color:black;
}`

const HeaderText = Styled.div`
h1{
    color:white;
    padding-top:15vh;
    text-align:center;
    // opacity:0.7;
}
`
