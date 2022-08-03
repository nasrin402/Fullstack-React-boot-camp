import React from 'react';

const StartBtn = ({fetchData}) => {
    return (
        <div className="container mt-sm-5 my-1">
        <div className=" text-center">
        <button onClick={fetchData} className="btn btn-success btn-lg">Start Quiz</button>
      </div>
    </div>
    );
}

export default StartBtn;
