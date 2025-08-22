// Call AI Model for Predications
import ora from 'ora';
import chalk from 'chalk';
import { GoogleGenAI } from "@google/genai";
// API Call
export async function getPredications(singleDigit){
    const GEMINI_API_KEY = "AIzaSyAFPsT5_YVgs1pW2mQD8c4okMx921RcsF8"; //enter your genai api key
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    const prompt = `Act as a 10 year experience Numerology Person.
    tell me the destiny of this number ${singleDigit}.
    tell me the nature of this number and life path of this number.
    limit your response to 100 words.
    `;
    try{
        const spinner = ora('Loading....');
        spinner.info();
        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash-lite',
            contents: prompt,
        });  
        const result = await response.text;
        const cleaned = await result.replace(/\*/g, "").trim();
        spinner.stop();
        console.log(chalk.green.bold(cleaned));
}
catch(err){
    console.log('Error ::::::::: ' ,err);
}
}