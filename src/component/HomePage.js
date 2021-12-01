import React from 'react'
import styled from "styled-components"
import WhyWe from "./WhyWe"
// import RightImg from "../img/rightimg.png"       

const HomePage = () => {
    return (
        <MainContianer>
        <Contianer>
      <Wrapper>
        <Card>
          <Text>Let's invest in your Future.</Text>
          <Text>
            Start Your Career in Tech with
            <span>no Upfront Payment</span>
          </Text>
          <Sub>
            Learn how to code and Build Amazing Projects in 1 year (9 months of
            Rigoius training + 3 months internship)
          </Sub>
          <ButtonHolder>
            {/* <Button bg>Apply Now (Closed)</Button> */}
            <Button bg1>Apply Now</Button>
          </ButtonHolder>
{/* 
          <Below>
            <Arrange>
              <Icon cl="#004080">
                <GppGoodIcon />
              </Icon>
              <TextDown>No tuition fee</TextDown>
            </Arrange>
            <Arrange>
              <Icon cl="red">
                <GppGoodIcon />
              </Icon>
              <TextDown>No prior programming knowledge required</TextDown>
            </Arrange>
          </Below> */}
        </Card>
      </Wrapper>
    </Contianer>
          <WhyWe/>
    </MainContianer>


        // <Container>
        //    <Wrapper> 
        //        <Left>
        //            <TopTitle>
        //            Let's invest in your Future.
        //             Start Your Career in Tech with  
        //                <span>no Upfront Payment</span>
        //            </TopTitle>
        //         <Dec>Learn how to code and Build Amazing Projects in 1 year (9 months of Rigoius training + 3 months internship)
        //             </Dec>
                    
        //             <DownButton>
        //                 <Button clr bck>Apply Now</Button>
        //                 {/* <Button>Discount</Button> */}
        //             </DownButton>
        //        </Left>
        //        {/* <Right>
        //            <Image src={RightImg} />
        //        </Right> */}
        //    </Wrapper>
        // </Container>
    )
}

export default HomePage
const Button = styled.div`
  padding: 20px 40px;
  background-color: ${({ bg }) => (bg ? "transparent" : "#D41E49")};
  color: ${({ bg }) => (bg ? "black" : "white")};
  font-weight: ${({ bg1 }) => (bg1 ? "bold" : "normal")};
  margin: 10px;
  border: 3px solid;
  border-color: ${({ bg }) => (bg ? "black" : "transparent")};
  transform: scale(1);
  transition: all 350ms;
        

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
    padding: 20px 20px;
    border-radius: 5px;
    margin: 0px;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
`;

const Sub = styled.div`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 50px;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 20px;
  }
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  margin: 15px 0;
  /* font-family: AlmarenaDisplayBold; */

  span {
    color: red;
    margin-left: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;
const Contianer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 700px;
  /* background-color: #fef6ee; */
  color: #004080;

  @media screen and (max-width: 500px) {
    min-height: 500px;
    padding-top: 20px;
  }
`;

const MainContianer = styled.div`
  display: flex;
  flex-direction: column;
`
// const Image = styled.img`
//     width: 90%;
//     height: 100%;
// `
// const Right = styled.div`
    
// @media screen and (max-width: 1154px) {
//     display:none; 
// }
// `
// const Button = styled.div`  
//     margin-right: 30px;
//     width: 250px;
//     height: 60px;
//     border-radius: 5px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-weight: 700;
//     cursor: pointer;
//     color:  ${({clr})=> clr ? "white" : "#D41E49"};
//     background-color: ${({bck}) => bck ? "#D41E49" : "white"};
//     transition: all 400ms ease-in;
//     transform: scale(1);
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
//     rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

//     :hover{
//         background-color: ${({bck}) => bck ? "white" : "#D41E49"};
//         color:  ${({clr})=> clr ? "#D41E49" : "white"};
//         transform: scale(0.9);
//     }
    
//     @media screen and (max-width: 500px) {
//     font-size: 12px;
//     padding: 20px 20px;
//     border-radius: 5px;
//     margin: 0px;
//     width: 150px;
//     height: 30px;
//   }
//     /* @media screen and (max-width: 1154px) {
        
// }

// @media screen and (max-width: 320px) {
//         font-size: 15px;
// } */


// `
// const DownButton = styled.div`
//     display: flex;
//     margin-top: 35px;
//  /* @media screen and (max-width: 1154px) {
//       margin-top: 30px;
//     }
//  @media screen and (max-width: 375px) {
//       margin-top: 20px;
//     } */

// `
// const Dec = styled.div`
//     margin-top: 15px;
//     color: whitesmoke;
//     font-size: 18px;
//     font-family: leway, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    
//     @media screen and (max-width: 500px) {
//     font-size: 15px;
//     margin-top: 5px;
//     margin-bottom: 20px;
//   }
// `
// const TopTitle = styled.div`
//     width: 100%;
//     text-align: center;
//     font-size: 40px;
//     font-weight: 700;
//     color: white;
//     /* display: flex;
//     flex-direction: column; */
//     font-family: Verdana, Geneva, Tahoma, sans-serif;

//     span{
//         font-size: 38px;
//         margin-left: 10px;
//         color: red;
//     }

//     @media screen and (max-width: 500px) {
//     font-size: 35px;
//     margin-top: 5px;
//     margin-bottom: 10px;
//   }

// `
// const Left = styled.div`
//     margin: 80px;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

// `
// const Wrapper = styled.div`
//     width: 80%;
//     height: auto;
//     flex-wrap: wrap;    
//     background: linear-gradient(to bottom right, #726AF6, #C585D3);
//     border-radius: 15%;
//     display: flex;
//     align-items: center;
//     justify-content: center;

// /*     
//     @media screen and (max-width: 1280px) {
//         margin-top: 20px;
// } */
// /* @media screen and (max-width: 1154px) {
//     margin-top: 40px;
// } */
//     /* @media screen and (max-width: 768px) {
//         margin-top: -300px;
// }
//     @media screen and (max-width: 428px) {
//         margin-top: 1px;
// }
//     @media screen and (max-width: 414px) {
//         margin-top: 1px;
// }
//     @media screen and (max-width: 393px) {
//         margin-top: 4px;
// }
//     @media screen and (max-width: 320px) {
//         margin-top: 240px;
// } */

// `
// const Container = styled.div`
//     width: 100%;
//     height: 83vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-top: 100px;
//     /* background-color: blue; */

//     @media screen and (max-width: 500px) {
//     min-height: 500px;
//     margin-top: 250px;
//   }
// `