import PolicyModel from "../models/Policy.js";

export const askQuestion = async (req, res) => {
  try {
    const { question } = req.body;

    // 1️⃣ convert question to lowercase words
    const questionWords = question.toLowerCase().split(" ");

    // 2️⃣ get all policies from DB
    const policies = await PolicyModel.find();

    let bestMatch = "";
    let maxMatchCount = 0;

    // 3️⃣ compare question words with each policy text
    for (let policy of policies) {
      const policyWords = policy.text.toLowerCase().split(" ");

      let matchCount = 0;

      for (let word of questionWords) {
        if (policyWords.includes(word)) {
          matchCount++;
        }
      }

      // 4️⃣ select policy with highest match
      if (matchCount > maxMatchCount) {
        maxMatchCount = matchCount;
        bestMatch = policy.text;
      }
    }

    res.json({
      question,
      matchedPolicy: bestMatch
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};