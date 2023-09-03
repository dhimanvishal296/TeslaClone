import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Section = ({ title, description, leftBtnText, rightBtnText, backgroundImg }) => {

    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description} </p>
                </ItemText>
            </Fade>


            <Button>
                    <ButtonGroup>
                       <Fade left>
                         <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                        </Fade>
                        {rightBtnText &&
                            <Fade right>
                                <RightButton>
                                    {rightBtnText}
                                </RightButton>
                            </Fade>
                        }
                    </ButtonGroup>
               
                <DownArrow src="/images/down-arrow.svg" />
            </Button>
         

        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
  
   width:100vw;
   height:100vh;
   background-image: url("/images/model-3.jpg");
   background-position:center;
   background-repeat:no-repeat;
   background-size:cover;
   display:flex;
   object-fit: contain;
   flex-direction:column;
   justify-content:space-between; // for vertical alignment
   align-items:center;   //horizontal alignment
   background-image:${props => `url("/images/${props.bgImage}")`}
`
const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`
const ButtonGroup = styled.div`
  display:flex;
  margin-bottom: 30px;
  @media(max-width: 768px){
    flex-direction :column;
  }


`
const LeftButton = styled.div`
 background-color: rgba(23, 26, 32, 0.9);
 height:40px;
 width:256px;
 color:white;
 display:flex;
 justify-content:center;
 align-items:center;
 border-radius:5px;
 opacity:0.85;
 text-transform:uppercase;
 font-size:12px;
 cursor:pointer;
 margin:10px;
`
const RightButton = styled(LeftButton)`
 background:white;
 opacity:0.65;
 color:black;
`
const DownArrow = styled.img`
   height:40px;
   animation: animateDown infinite 1.5s;
   overflow-x:hidden;
   

  
`
const Button = styled.div`
 display:flex;
 flex-direction:column;
`