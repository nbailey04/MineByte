import Editor from '@monaco-editor/react';
import { useRef, useState, useEffect } from 'react';
import Output from "./Output";

const CodeEditor = ({ language }) => {
    const editorRef = useRef();
    const [value, setValue] = useState('');
    const [prompt, setPrompt] = useState('');

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    // Update the prompt based on selected language
    useEffect(() => {
        let initialPrompt;
        switch (language) {
            case 'cpp':
                initialPrompt = '// Write your C++ code here...\n//Below is basic print code\n #include <iostream>\n \nint main() { \n   std::cout << "Hello, World!" << std::endl;\n    return 0;\n}';
                break;
            case 'java':
                initialPrompt = '/* Write your Java code here...\nBelow is basic print code*/\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n   }\n}';
                break;
            case 'python':
                initialPrompt = '# Write your Python code here...\n## Below is basic print code\ndef HelloWorldPrinter():\n  print("Hello World!")\nHelloWorldPrinter()';
                break;
            case 'javascript':
                initialPrompt = '// Write your JavaScript code here...\n//Below is basic print code\nconsole.log("Hello, World!");';
                break;
            case 'csharp':
                initialPrompt = '/* Write your C# code here...\nBelow is basic print code*/\nusing System;\nnamespace HelloWorld\n{\n   class Program\n   {\n      static void Main(string[] args)\n      {\n        Console.WriteLine("Hello World!");\n      }\n   }\n}';
                break;
            case 'ruby':
                initialPrompt = '# Write your Ruby code here...\n## Below is basic print code*/\nputs "Hello World!"';
                break;
            case 'php':
                initialPrompt = '<?php\n/* Write your PHP code here...\nBelow is basic print code*/\n$greeting = "Hello World!";\necho $greeting\n?>'; 
                break;
            case 'go':
                initialPrompt = '/* Write your GO code here...\nBelow is basic print code*/\npackage main\nimport ("fmt")\nfunc main() {\n    fmt.Println("Hello World!")\n}';
                break;
            case 'swift':
                initialPrompt = '/* Write your Swift code here...\nBelow is basic print code*/\nlet greeting = "Hello, World!"\nprint(greeting)';
                break;
            case 'kotlin':
                initialPrompt = '/* Write your Kotlin code here...\nBelow is basic print code*/\nfun main() {\n    println("Hello World")\n}';
                break;
            default:
                initialPrompt = 'XXXX HOLD ON!!! You cant start typing yet...\n ^^^Select one of the languages from above first!';
        }
        setPrompt(initialPrompt);
        setValue(initialPrompt);  // Set value to prompt
    }, [language]);

    return (
        <div className="editor-container">
            <Editor
                height="40vh"
                width="1000px"

                language={language}
                value={value}  // Use value directly for dynamic updates
                onMount={onMount}
                onChange={(value) => setValue(value)}
            />
            <Output editorRef={editorRef} language={language} />
        </div>
    );
};

export default CodeEditor;
