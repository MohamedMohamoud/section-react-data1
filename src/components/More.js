import React from 'react'

import {Row,Col} from "react-bootstrap";
const More = ({person}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="">
         <div className="rectangle p-2 ">

            {person.length ? (person.map((item)=>{

             return(
                <div className="d-flex border-bottom mx-3">
                <img className="img-avtar"  src="Screenshot_2018-12-18-00-06-55-67.png" alt=""/>
                <div className="px-3">
                  <p className="d-inline fs-5"> {item.name}</p>
                  <p className="fs-6">{item.date}</p>
                </div>
              </div>
              )
            })): <h2>no day</h2>}
          
          </div>



          </Col>

        </Row>
  )
}

export default More;