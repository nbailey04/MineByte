import React, { useState } from 'react';
import './TestYourSkills.css';

import Footer from '../components/Footer.js';

import Accomplishments from './Accomplishments.js';



import CodeEditor from './TestYourSkills-CodeEditor.js';
import { TestYourSkills_questions } from './TestYourSkills-Questions.js'

const displayNames = {
  cpp: "C++",
  java: "Java",
  python: "Python",
  javascript: "JavaScript",
  csharp: 'C#',
  ruby: 'Ruby',
  php: 'Php',
  go:'Go',
  swift: 'Swift',
  kotlin: 'Kotlin'
};


const TestYourSkills = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isSandboxMode, setIsSandboxMode] = useState(false);
  const [questionType, setQuestionType] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [multipleChoiceOptions, setMultipleChoiceOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [earnedCertificates, setEarnedCertificates] = useState([]);
  const [output, setOutput] = useState('');
  const [editorContent, setEditorContent] = useState('');



  const questions = Object.entries(TestYourSkills_questions)

  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language.toLowerCase()); // Store the language in lowercase
    setIsSandboxMode(false);
    setQuestionType(null);
  };
  

  const handleQuestionTypeSelection = (type) => {
    setQuestionType(type);
    setCurrentQuestionIndex(0);
    setPoints(0);
    if (type === 'general') {
      generateMultipleChoice();
    }
  };

const generateMultipleChoice = () => {
  if (!selectedLanguage || !TestYourSkills_questions[selectedLanguage]) {
    console.error("Selected language is invalid or not found in TestYourSkills_questions.");
    return;
  }

  // Access the questions for the selected language
  const currentQuestions = TestYourSkills_questions[selectedLanguage].general;

  if (!currentQuestions || currentQuestionIndex >= currentQuestions.length) {
    console.error("No questions available or invalid index.");
    return;
  }

  // Get the current question
  const currentQuestion = currentQuestions[currentQuestionIndex];
  
  const correctAnswer = currentQuestion.correctAnswer;
  const incorrectAnswers = currentQuestion.incorrectAnswers;

  // Randomly select three wrong answers if there are more than three
  const selectedWrongAnswers = incorrectAnswers.length > 3 
    ? incorrectAnswers.sort(() => 0.5 - Math.random()).slice(0, 3)
    : incorrectAnswers;

  // Combine correct answer with selected wrong answers
  const options = [correctAnswer, ...selectedWrongAnswers];

  // Shuffle the options
  setMultipleChoiceOptions(options.sort(() => 0.5 - Math.random()));
};

  



  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    const questionData = TestYourSkills_questions[selectedLanguage]?.general[currentQuestionIndex];
    
    // Check answer correctness
    if (questionData && selectedAnswer === questionData.correctAnswer) {
      setPoints((prevPoints) => prevPoints + 1); // Increment points
      alert("Correct!");
    } else {
      alert("Incorrect. Try the next question!");
    }
  
    // Update question index
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex + 1 < TestYourSkills_questions[selectedLanguage]?.general.length) {
        return prevIndex + 1; // Go to next question
      } else {
        alert("You've completed all questions!");
        return prevIndex = 0; // Resets the Index
      }
    });
  
    // Check for certificates and reset points
    setPoints((prevPoints) => {
      if (prevPoints + 1 === 7) {
        setEarnedCertificates((prevCertificates) => [
          ...prevCertificates,
          displayNames[selectedLanguage],
        ]);
        alert(`You have obtained the ${displayNames[selectedLanguage]} certificate!`);
        return 0; // Reset points
      }
      return prevPoints;
    });
  
    // Clear the selected answer and regenerate multiple-choice options
    setSelectedAnswer('');
    generateMultipleChoice(); // Ensure new question options are set
  };
  
  // Update the multiple-choice options whenever the question index changes
  React.useEffect(() => {
    generateMultipleChoice();
  }, [currentQuestionIndex]);
  
  

  const handleNextQuestion = () => {
    const nextIndex = (currentQuestionIndex + 1) % (questions[selectedLanguage]?.general.length || 1);
    setCurrentQuestionIndex(nextIndex);
    generateMultipleChoice();
  };

  const handleSandbox = () => {
    setIsSandboxMode(true);
  };

  const handleSwitchLanguage = () => {
    setSelectedLanguage(null);
    setQuestionType(null);
  };

  const handleLeavePage = () => {
    
    setShowDialog(true);
  };

  const handleEditorChange = (newContent) => {
    setEditorContent(newContent);
  };
  

  const confirmLeave = () => {
    setShowDialog(false);
    // Delay the state reset
    setTimeout(() => {
      setSelectedLanguage(null);
      setIsSandboxMode(false);
      setQuestionType(null);
      setCurrentQuestionIndex(0);
      setPoints(0);
      setMultipleChoiceOptions([]);
      setSelectedAnswer('');
      setOutput('');
      setEditorContent(''); // Clear editor content
    }, 300); // Allow dialog to close smoothly before resetting
  };
  

  const CodeEditorComponent = () => {
    return <CodeEditor
    language={selectedLanguage}
    content={editorContent}
    setContent={setEditorContent}
  />
  

    };
  

  return (
    <div className="skills-selection">
      {!selectedLanguage && !isSandboxMode ? (
        <>
          <h2 style={{ marginTop: '50px' }}>Select a language to test your skills</h2>
          <div className="language-options">
            <button onClick={() => handleLanguageSelection('cpp')}>C++</button>
            <button onClick={() => handleLanguageSelection('java')}>Java</button>
            <button onClick={() => handleLanguageSelection('python')}>Python</button>
            <button onClick={() => handleLanguageSelection('javascript')}>JavaScript</button>

            <button onClick={() => setSelectedLanguage('csharp')}>C#</button>
            <button onClick={() => setSelectedLanguage('ruby')}>Ruby</button>
            <button onClick={() => setSelectedLanguage('php')}>PHP</button>
            <button onClick={() => setSelectedLanguage('go')}>GO</button>
            <button onClick={() => setSelectedLanguage('swift')}>Swift</button>
            <button onClick={() => setSelectedLanguage('kotlin')}>Kotlin</button>
          </div>
          <h2 style={{ marginTop: '50px' }}>Or to just Freestyle</h2>
          <div className = "language-options"> 
          <button onClick={handleSandbox}>Sandbox</button>
          </div>
        </>
      ) : isSandboxMode ? (
        <div className="sandbox-container">
          <h3>Sandbox Mode</h3>
          <h4> (Select a language that you want to type in)</h4>
          <h5>(Current Language: {displayNames[selectedLanguage]})</h5>
          <div className="language-switcher">
            <div className="language-options">
            <button onClick={() => setSelectedLanguage('cpp')}>C++</button>
            <button onClick={() => setSelectedLanguage('java')}>Java</button>
            <button onClick={() => setSelectedLanguage('python')}>Python</button>
            <button onClick={() => setSelectedLanguage('javascript')}>JavaScript</button>

            <button onClick={() => setSelectedLanguage('csharp')}>C#</button>
            <button onClick={() => setSelectedLanguage('ruby')}>Ruby</button>
            <button onClick={() => setSelectedLanguage('php')}>PHP</button>
            <button onClick={() => setSelectedLanguage('go')}>GO</button>
            <button onClick={() => setSelectedLanguage('swift')}>Swift</button>
            <button onClick={() => setSelectedLanguage('kotlin')}>Kotlin</button>
            </div>
            <CodeEditorComponent />
          </div>
          
          <div className='leave-test'>
          <button type="button" onClick={handleLeavePage}>Leave Sandbox</button>
          </div>
          
        </div>
        ) : questionType === null ? (
        <div className="gen-or-task">
          <h3>{displayNames[selectedLanguage]} Selected</h3>
          <h4>Select the type of question:</h4>
          <button onClick={() => handleQuestionTypeSelection('general')}>General Questions</button>
          <button onClick={() => handleQuestionTypeSelection('tasks')}>Tasks</button>
          <div className='alt-options' >
            <button onClick={handleSwitchLanguage}>Switch Language</button>
          </div>
        </div>
      ) : questionType === 'general' ? (
        <div className="quiz-mode">
          <h3>{displayNames[selectedLanguage]} General Questions</h3>
          <p>{TestYourSkills_questions[selectedLanguage]?.general[currentQuestionIndex]?.question}</p>
          <div className="multiple-choice-options">
            {/* Display one correct answer and three wrong answers */}
            {multipleChoiceOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelection(option)}
                className={selectedAnswer === option ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="submit-answer">
            <button onClick={handleSubmitAnswer}>Submit Answer</button>
          </div>
          <p>Points: {points}</p>
          <Footer points={points}/>
          <div className="leave-test">
          <button type="button" onClick={handleLeavePage}>Leave Test</button>

          </div>
          <Accomplishments earnedCertificates={earnedCertificates} />

        </div>
      ) : (
        <div>
        <div className="tasks-mode">
          <h3>{displayNames[selectedLanguage]} Tasks</h3>
          <p>{TestYourSkills_questions[selectedLanguage]?.tasks[currentQuestionIndex]}</p>
          <CodeEditorComponent />
          </div>
          <div className="submit-answer-tasks">
            <button onClick={handleSubmitAnswer}>Submit Code</button>
          </div>
          <div className='leave-test'>
          <button type="button" onClick={handleLeavePage}>Leave Test</button>

          </div>
        </div>
      )}
      {showDialog && (
        <div className="dialog">
          <p className="dialog-message">Are you sure you want to leave? Your progress will be lost.</p>
          <button onClick={confirmLeave}>Yes, Leave</button>
          <button type="button" onClick={() => setShowDialog(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default TestYourSkills;
