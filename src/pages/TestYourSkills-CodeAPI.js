import axios from "axios";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
  headers: {
    "Content-Type": "application/json"
  }
});

export const executeCode = async (language, sourceCode) => {
  try {
    const response = await API.post("/execute", {
      language: language,
      version: "*",  // Use "*" for latest version or specify version as needed
      files: [
        {
          content: sourceCode,
        }
      ],
      stdin: ""
    });
    return response.data;
  } catch (error) {
    console.error("Error executing code:", error);
    throw error;
  }
};

