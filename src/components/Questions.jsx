import React from "react";
import AnsCard from "./AnsCard";

const Questions = ({quiz, currentQueAnswers, currentQueIndex, quizes, navigateNext, navigatePrev, pickAns, pickedAns, correctAnswer}) => {
   
  return (
    <div className="container mt-sm-5 my-1">
      <div className="question ml-sm-5 pl-sm-5 pt-2">
      <div className="py-2 h3 text-center">
      <h2 className="text-warning">Play a quiz game to win WOW surprise.</h2>
        <p>Question: {currentQueIndex + 1}/{quizes.length}</p>
      </div>
        <div className="py-2 h5">
          <b>Q. {quiz.question}</b>
        </div>
        <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            {currentQueAnswers.map((ans, i) =><AnsCard ans={ans} key={i} pickAns={pickAns} pickedAns={pickedAns} correctAnswer={correctAnswer} />)}
          
         
        </div>
      </div>
      <div className="d-flex align-items-center pt-3">
       {/*  <div id="prev">
          <button className="btn btn-primary" onClick={navigatePrev}>Previous</button>
  </div> */}
        <div className="mx-auto  mr-sm-5">
          <button className="btn btn-success" onClick={navigateNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
