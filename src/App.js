import React from "react";
import styled from 'styled-components'
import { Link, Route, Switch } from "react-router-dom"
import img from './Pizza.jpg'
import PizzaForm from "./Components/PizzaForm"

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  background: gray;
  border: 2px solid black;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background: orange;
  color: white;
`;

const Button = styled.button`
  background: black;
  color: white;
  padding: 15px 34px;
  margin: 10px;
  cursor: pointer;
`;

const H1 = styled.h1 `
  margin: 10px;
`;

const Section = styled.section`
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

const PizzaButton = styled(Button)` 
  background: orange;
  padding: 20px 40px;
  margin-top: 300px;
`;


const App = () => {


  return (
    <Container>
      <Nav>
        <H1>Lambda Eats</H1>
        <Link to={"/"}>
            <Button>Home</Button>
        </Link>
      </Nav>

      <Switch>
        <Route path={"/pizza"}>
          <PizzaForm />
        </Route>

        <Route path={"/"}>
          <Section>
            <Link to={"/pizza"}>
              <PizzaButton>Pizza!</PizzaButton>
            </Link>
          </Section>
        </Route>
      </Switch>



   
    </Container>  
  );
};
export default App;
