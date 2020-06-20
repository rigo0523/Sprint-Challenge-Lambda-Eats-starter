import React from "react";
import { Container, Nav, Button, H1, Section, PizzaButton } from "./components/styled.js"
import { Link, Route, Switch } from "react-router-dom"
import Card from "./components/Card"



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
          <Card />
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
