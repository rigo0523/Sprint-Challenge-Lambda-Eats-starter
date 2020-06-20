import styled from 'styled-components';
import img from "../Pizza.jpg"


export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  border: 1px solid black;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background: black;
  color: white;
`;

export const Button = styled.button`
  background: white;
  color: black;
  padding: 15px 34px;
  margin: 10px;
  cursor: pointer;
`;
export const H1 = styled.h1 `
  margin: 10px;
`;

export const Section = styled.section`
    width: 100%;
    height: 50vh;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PizzaButton = styled(Button)` 
  background: orange;
  padding: 20px 40px;
  margin-top: 300px;
`;

// form input label container 

export const Wrapper = styled.div`
  background: gray;
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 20px;
`;






