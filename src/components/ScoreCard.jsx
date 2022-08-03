import React from "react";

const ScoreCard = ({ totalScore, resetQuiz }) => {
  return (
    <div>
      <div className="container mt-sm-5 my-1">
        <div className="question ml-sm-5 pl-sm-5 pt-2">
          <div className="py-2  text-center text-white">
            <h2>
              Your Score is{" "}
              <strong className="text-success">{totalScore}</strong> out of{" "}
              <strong className="text-warning">10</strong>{" "}
            </h2>
          </div>
          <div>
            <img src="image/5iRrMogAT.gif" alt="image" />
          </div>
          <div>
            <button className="btn btn-success" onClick={resetQuiz}>
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
