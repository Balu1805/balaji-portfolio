import spiritResponses from "../data/spiritResponses";

export const chatSuggestions = [
  "Projects",
  "Skills",
  "AI work",
  "Certifications",
  "Contact"
];

export const initialSpiritChat = [
  {
    type: "bot",
    text: "Welcome. I am Balu's portfolio guide."
  },
  {
    type: "bot",
    text: "Ask about projects, skills, certifications, education, AI work, or contact details."
  }
];

export const idleSpiritMessages = [
  "Curious about the AI projects?",
  "Ask me for the short version of Balu's stack.",
  "I can point you to certificates, resume, or contact details."
];

export function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getSpiritReply(userMessage) {
  const normalized = userMessage.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;

  spiritResponses.forEach((item) => {
    const score = item.keywords.reduce((total, keyword) => {
      return normalized.includes(keyword) ? total + keyword.length : total;
    }, 0);

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  });

  if (bestMatch) return bestMatch.answer;

  const contexts = spiritResponses.map((item) => item.intent).filter(Boolean);
  return `I can help with ${contexts.join(", ")}. Try asking "show projects", "what is his tech stack", or "how can I contact him?"`;
}
