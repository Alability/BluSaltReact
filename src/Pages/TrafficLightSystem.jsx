import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  background: none;
`;

const Light = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-bottom: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const LightContainer = styled.div`
  width: 200px;
  height: 300px;
  border: 4px solid yellow;
  background-color: #2B2B2A;
  //   margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const LightMidBox = styled.div`
    display: flex;
    background-color: #2B2B2A;
    border: 4px solid yellow;
`;

const LightMidContainer = styled.div`
  width: 300px;
  height: 225px;
  background-color: #2B2B2A;
  border: none;
  margin-left: 3.7em;
  margin-right: 3.7em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const LightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const  Controlcontainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
background-color: #2B2B2A;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  background-color: green;
  margin-bottom: 2em;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const TrafficLightSystem = () => {
    const [currentColor, setCurrentColor] = useState("green");
    const [currentColorB, setCurrentColorB] = useState("red");
    const [isCycleInProgress, setIsCycleInProgress] = useState(true);
    const [isCycleInProgressB, setIsCycleInProgressB] = useState(true);

    useEffect(() => {
        let interval;

        if (isCycleInProgress) {
            interval = setInterval(() => {
                setCurrentColor((prevColor) => {
                    if (prevColor === "green") return "yellow";
                    // if (currentColorB === "yellow") return "red";
                    if (prevColor === "yellow") return "red";
                    if (prevColor === "red") return "green";
                });
            }, 5000);
        }

        if (isCycleInProgressB) {
            interval = setInterval(() => {
                setCurrentColorB((prevColor) => {
                    if (prevColor === "green") return "yellow";
                    // if (currentColor === "yellow") return "red";
                    if (prevColor === "yellow") return "red";
                    if (prevColor === "red") return "green";
                });
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [isCycleInProgress, isCycleInProgressB]);

    const handleReset = () => {
        setCurrentColor("green");
        setCurrentColorB("red");
        setIsCycleInProgress(true);
        setIsCycleInProgressB(true);
    };

    //   const handleReset2 = () => {
    //     setCurrentColor("red");
    //     setIsCycleInProgress2(true);
    //   };

    const handleToggleCycle = () => {
        setIsCycleInProgress((prevIsCycleInProgress) => !prevIsCycleInProgress);
        setIsCycleInProgressB((prevIsCycleInProgress) => !prevIsCycleInProgress);
    };

    return (
        <Container>
            <LightContainer>
                <p>street A</p>
                <LightWrapper>
                    <Light color={currentColor === "red" ? "red" : "#939393"} />
                    <Light color={currentColor === "yellow" ? "yellow" : "#939393"} />
                    <Light color={currentColor === "green" ? "green" : "#939393"} />
                </LightWrapper>
            </LightContainer>
            <LightMidBox>
                <LightMidContainer>
                    <p style={{ position: "absolute" }}>street B</p>
                    <LightWrapper>
                        <Light color={currentColorB === "red" ? "red" : "#939393"} />
                        <Light color={currentColorB === "yellow" ? "yellow" : "#939393"} />
                        <Light color={currentColorB === "green" ? "green" : "#939393"} />
                    </LightWrapper>
                </LightMidContainer>
                <Controlcontainer>
                    <Button onClick={handleToggleCycle}>
                        {isCycleInProgress ? "Stop" : "Start"}
                    </Button>
                    <Button onClick={handleReset}>Reset</Button>
                </Controlcontainer>
                <LightMidContainer>
                    <LightWrapper>
                        <Light color={currentColorB === "red" ? "red" : "#939393"} />
                        <Light color={currentColorB === "yellow" ? "yellow" : "#939393"} />
                        <Light color={currentColorB === "green" ? "green" : "#939393"} />
                    </LightWrapper>
                </LightMidContainer>
            </LightMidBox>
            <LightContainer>
                <LightWrapper>
                    <Light color={currentColor === "red" ? "red" : "#939393"} />
                    <Light color={currentColor === "yellow" ? "yellow" : "#939393"} />
                    <Light color={currentColor === "green" ? "green" : "#939393"} />
                </LightWrapper>
            </LightContainer>
        </Container>
    );
};

export default TrafficLightSystem;
