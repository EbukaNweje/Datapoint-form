import React from 'react'
import styled  from "styled-components"
import pencil from "../img/pencil.png"
import cloud from "../img/cloud.png"
import book from "../img/book.png"
import ArrangeCourse from "./ArrangeCourse"

const WhyWe = () => {
    return (
        <MainContainer>
        <Container>
           <Wrapper>
                <WhyAbout>
                  <Title>
                     Why we are better
                    than others
                  </Title>
                  <Dec>
                  Our programs are a perfect blend of theory and practice, providing you with a well-rounded education.
                  </Dec>
                  {/* <Read>Read More</Read> */}
                </WhyAbout>
                <Why>
                    <Image>
                        <ImagTop src={book}/>
                    </Image>
                    <Text>Convenient study schedule</Text>
                </Why>
                <Why2>
                <Image>
                    <ImagTop src={pencil}/>
                    </Image>
                    <Text>Cheched Homework by teacher</Text>
                </Why2>
                <Why>
                <Image>
                    <ImagTop src={cloud}/>
                    </Image>
                    <Text>Modern internet platform</Text>
                </Why>
           </Wrapper>
        </Container>
            <ArrangeCourse />
        </MainContainer>
    )
}

export default WhyWe
const Text = styled.div`
    height: 120px;
    width: 100px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    color: #21004d;

`
const ImagTop = styled.img`
    width: 50px;
    height: 50px;
`
const Image = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background: linear-gradient(to bottom right, #726AF6, #C585D3);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    right: 0px;
    left: 0px;  
    margin-top: 15px;
`
// const Read = styled.div`
//     font-size: 12px;
//     width: 90%;
//     text-align: right;
//     color: red;
//     font-weight: 500;
//     cursor: pointer;
//     margin: 10px 5px;

//     :hover{
//         color: #880505;
//     }
// `
const Dec = styled.div`
    height: 40%;
    /* background-color: red; */
    font-size: 13px;
    margin: 0px 5px;
`
const Title = styled.div`
    margin: 10px 10px;
    font-size: 30px;
    font-weight: bolder;
    width: 100%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #880505;
`
const Why2 = styled.div`
    width: 30vh;
    background-color: #fff;
    margin: 30px 10px;
    height: 35vh;
    border-radius: 20px;
    margin-top: 50px;
    box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.252);
    /* cursor: pointer;
    transform: scale(1);
    transition: all 350ms; */
    display: flex;
    flex-direction: column;
/* 
    :hover{
        transform: scale(1.06);
    } */
`
const WhyAbout = styled.div`
    width: 30vh;
    margin-top: 30px;
    margin-left: 10px;
    /* margin: 30px 10px; */
    height: 35vh;
    border-radius: 20px;
    margin-left: 30px;
    /* background-color: white;
    box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.252); */
`
const Why = styled.div`
    width: 30vh;
    margin: 30px 10px;
    background-color: #fff;
    height: 35vh;
    border-radius: 20px;
    margin-left: 30px;
    box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.252);
    /* cursor: pointer;
    transform: scale(1);
    transition: all 350ms; */
    display: flex;
    flex-direction: column;

    /* :hover{
        transform: scale(1.06);
    } */
`
const Wrapper = styled.div`
    width: 80%;
    height: 85%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* align-items: center; */
`
const Container = styled.div`
    width: 100%;
    height: 30%;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(248, 248, 248);
`
const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
`


