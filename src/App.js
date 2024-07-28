import {Container} from "react-bootstrap";
import React, { useState } from "react";
import { person } from "./data";
import Date from "./components/Date";
import More from "./components/More";
import DatesAction from "./components/DatesAction";
function App() {
  const [personData, setpersonData] = useState (person)
  const onDelete =() =>{
    setpersonData([])
  }
  const onViewData =() =>{
    setpersonData([person])
  }
  return (
    <div className="font color-body">
      <Container className="py-5">
       <Date person={personData}/>
       <More person={personData}/>
       <DatesAction deleteData ={onDelete} onViewData ={onViewData}/>
    

      </Container>
      
    </div>
  );
}

export default App;
