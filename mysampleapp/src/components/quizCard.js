import React, { useEffect, useState } from "react";
import "./card.css";
const Card = () => {

const [questions,setQuestions] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/c/3cbd-1cdb-462a-a286`
      );
      const data = await response.json();
     // console.log(data);

      setQuestions(data);

      
    


    } catch (error) {
      console.log(error);
    }
  };

 // console.log(questions)

  useEffect(()=>{
    fetchData();
   
  },[])


  let ques = questions.map((ele)=>ele.question)

let op1 = questions.map((ele)=>ele.a)
let op2 = questions.map((ele)=>ele.b)
let op3 = questions.map((ele)=>ele.c)
let op4 = questions.map((ele)=>ele.d)
let correct = questions.map((ele)=>ele.correct)

// const handleInput = (event)=>{
    
//  if(event.target.value === ){}
    
//     }

const handleSubmit = (event)=>{
event.preventDefault();

}

  return (
    <>
      <div className="container">
        <h1 className="heading1">Question 1</h1>
        <h2 className="heading2">{ques[0]}</h2>

        <div>
          <form onSubmit={handleSubmit}>
            <input type="radio"  />
            <label>{op1[0]}</label>
            <br />
            <input type="radio"  />
            <label>{op2[0]}</label>
            <br />
            <input type="radio" />
            <label>{op3[0]}</label>
            <br />
            <input type="radio" />
            <label>{op4[0]}</label>
            <br />
            <div className="btn">
              <button className="button">submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Card;
