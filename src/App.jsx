import { useEffect, useState } from "react";
import Questions from "./components/Questions";
import ScoreCard from "./components/ScoreCard";
import StartBtn from "./components/StartBtn";
import shuffle from "./components/Utils";

function App() {
  const [currentQueAnswers, setCurrentQueAnswers] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [currentQueIndex, setCurrentQueIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [pickedAns, setPickedAns] = useState(null);

  const resetQuiz = () => {
    setCurrentQueAnswers(null);
    setQuiz(null);
    setCurrentQueIndex(0);
    setLoaded(false);
    setStartQuiz(false);
    setEndGame(false);
    setTotalScore(0);
    setCorrectAnswer(null);
    setPickedAns(null);
  };
  const pickAns = (answer) => {
    setPickedAns(answer);
    if (answer === correctAnswer) {
      setTotalScore(totalScore + 1);
    }
  };
  const navigatePrev = () => {
    const currentQuizIndex = currentQueIndex - 1;
    const validQueIndex = currentQuizIndex >= 0;
    if (validQueIndex) {
      setCurrentQueIndex(currentQuizIndex);

      const question = quiz[currentQuizIndex];
      console.log(question);
      setCorrectAnswer(question.correct_answer);
      setPickedAns(pickedAns);
    } else {
      console.log("go to next");
    }
  };
  const navigateNext = () => {
    const currentQuizIndex = currentQueIndex + 1;
    const validQueIndex = currentQuizIndex < quiz.length;
    if (validQueIndex) {
      setCurrentQueIndex(currentQuizIndex);

      const question = quiz[currentQuizIndex];
      console.log(question);
      setCurrentQueAnswers(shuffle(question));
      setPickedAns(null);
      setCorrectAnswer(question.correct_answer);
    } else {
      setEndGame(true);
    }
  };
  useEffect( () =>{
    fetchData();
  },[])

  const fetchData = async () => {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    );
    const { results } = await res.json();
    //getting all answers
    const initialQueAns = results[currentQueIndex];
    //console.log(initialQueAns)
    // answers variable ta ami shuffle function er maddome nia asheci
    //const answers = [itialQueAnsIndex.correct_answer, ...itialQueAnsIndex.incorrect_answers];
    setCurrentQueAnswers(shuffle(initialQueAns));
    setQuiz(results);
    setCorrectAnswer(initialQueAns.correct_answer);
    setLoaded(true);
    setStartQuiz(true);
  };

  return (
    <div className="main" >
      {endGame && <ScoreCard totalScore={totalScore} resetQuiz={resetQuiz} />}
      {/* !startQuiz && <StartBtn fetchData={fetchData} /> */}
      {loaded && !endGame && (
        <Questions
          quiz={quiz[currentQueIndex]}
          currentQueAnswers={currentQueAnswers}
          currentQueIndex={currentQueIndex}
          quizes={quiz}
          navigateNext={navigateNext}
          pickAns={pickAns}
          navigatePrev={navigatePrev}
          correctAnswer={correctAnswer}
          pickedAns={pickedAns}
        />
      )}
    </div>
  );
}

export default App;
