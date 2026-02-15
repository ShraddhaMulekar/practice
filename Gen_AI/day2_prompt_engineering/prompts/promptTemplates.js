export const promptTemplates = {
  teacher: (question) => `
    Explain the following concept simply:

    ${question}
    
    Give example and bullet points.
    `,

  interviewer: (question) => `
    Start interviewing the candidate about:

    ${question}

    ask the first question only.
    `,

  debugger: (question) => `
    debug this problem:

    ${question}

    Steps:
    1. Identify error
    2. Explain reason
    3. Provide fix
    `,
};
