import { useState } from 'react';
import './TestYourSkills.css';
import { executeCode } from './TestYourSkills-CodeAPI';

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      const result = await executeCode(language, sourceCode);
      setOutput(result.run.output || result.output);  // Adjust based on response format
    } catch (error) {
      setOutput("An error occurred while executing the code.");
    }
  };

  return (
    <div className="output-box">
  <div className="compiler-container">
    <button onClick={runCode}>Run Code</button>
  </div>
  <div className="output-format">
    <h4>Output:</h4>
    <p>{output ? output : 'Click "Run Code" to see output'}</p>
  </div>
</div>

  );
};

export default Output;
