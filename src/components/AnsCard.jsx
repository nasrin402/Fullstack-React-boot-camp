import React from "react";

const AnsCard = ({ ans, pickAns, pickedAns, correctAnswer }) => {
  const isRight = pickedAns && ans === correctAnswer;
  const isWrong = pickedAns && pickedAns === ans && pickedAns !== correctAnswer;
  const correctClass = isRight ? "correct_ans" : "";
  const wrongClass = isWrong ? "wrong_ans" : "";
  const disabledClass = pickedAns && "disable_ans";
  return (
    <>
      {/*<div className={`quiz-answer ${correctClass} ${wrongClass} ${disabledClass} `} onClick={() => pickAns(ans)}>{ans}</div>*/}

       <label className="options" >
        {ans}
        <input type="radio" name="radio" onClick={() => pickAns(ans)} />
        <span className={`quiz-answer  ${correctClass} ${wrongClass} ${disabledClass} `}></span>
  </label> 
    </>
  );
};

export default AnsCard;
