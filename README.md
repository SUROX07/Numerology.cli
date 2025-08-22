# Numerology.cli

Welcome to **Numerology.cli** – a fun and interactive CLI tool that acts like a personal numerologist. Based on your date of birth, it calculates your **Destiny Number** and provides insights into your **Destiny** and **Life Path**.  

This project blends user input, custom computations, and AI-generated responses to give you a unique numerology reading – all from your terminal!

---

## Key Highlights

- **Interactive CLI**: Uses **Inquirer** to collect the user’s date of birth.  
- **Stylized Intro**: Beautiful ASCII intro banners powered by **Figlet**.  
- **Custom Numerology Formula**: Converts your birth date into a unique **Destiny Number**.  
- **AI-Powered Insights**: Fetches destiny and life path interpretations using **@google/genai**.  
- **User Feedback**: Includes spinners and colorful console outputs for a smooth experience.  

---

## File Structure

- **index.js** → The main entry point. Initializes and orchestrates the flow.  
- **intro.js** → Displays a stylized introduction message using **Figlet**.  
- **input.js** → Prompts the user for their **Date of Birth** via **Inquirer**.  
- **compute.js** → Calculates the **Destiny Number** from the provided birth date.  
- **gpt.js** → Generates the final **Destiny & Life Path** interpretation using **@google/genai**.  

---

## Technologies & Dependencies

- **@google/genai** `^1.15.0` – For AI-powered destiny/life path interpretations.  
- **chalk** `^5.4.1` – Adds colors and styles to console outputs.  
- **dotenv** `^17.2.1` – Manages API keys and environment variables.  
- **figlet** `^1.8.0` – Creates stylized ASCII banners for the intro.  
- **inquirer** `^12.5.0` – Collects user input in the terminal.  
- **ora** `^8.2.0` – Provides loading spinners for a smooth CLI experience.  

---

## Setup

### Prerequisites
- Node.js (>= 16 recommended)  
- A **Google GenAI API Key** stored in a `gpt.js` file as:  
  ```
  GENAI_API_KEY=your_api_key_here
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SUROX07/Numerology.cli
   cd Numerology.cli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the CLI:
   ```bash
   npm start
   ```

---

## Example Usage

```bash
? Enter your Date of Birth (DD-MM-YYYY): 15-07-1998

✨ Your Destiny Number is: 3
🔮 AI Interpretation:
The number 3 is the symbol of creativity, joy, and communication...
```

---

## Contributing

Feel free to fork this project, suggest features, or submit pull requests if you’d like to enhance **Numerology.cli**. Contributions are always welcome!
