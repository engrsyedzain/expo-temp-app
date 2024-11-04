import axios from 'axios';
import { apiKey } from './apiKey';

const fetchGemini = async (bookText, text: string) => {
    if (text === "") {
        throw new Error("Nothing found please try again.");
    }
    let prompt = `Based on this content: ${bookText}. Search for: ${text}. Please generate a text maximum 50 words.`;
    
    
    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
            {
                contents: [
                    {
                        parts: [
                            {
                                text: prompt//searchText + ", please not exceed in 50 words.",
                            },
                        ],
                    },
                ],
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error("Error details:", error.response ? error.response.data : error.message);
        throw new Error("Failed to fetch data from Server.");
    }
}

export default fetchGemini;
