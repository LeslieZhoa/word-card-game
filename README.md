# Word Card Game

This is a word card learning project developed using Cursor, an AI-powered IDE. The entire project was created and developed using Cursor.

A simple and effective web application for learning English vocabulary. This application helps you memorize words through interactive flashcards with pronunciation support.

## Features

- Interactive word cards
- Chinese translations
- Text-to-speech pronunciation
- Progress tracking
- Random word selection
- Mastery marking system

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository or download the source code
2. Navigate to the project directory:
   ```bash
   cd word-card-game
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

You can run the application in two ways:

1. Using the run script:
   ```bash
   ./run.sh
   ```

2. Or manually:
   ```bash
   cd word-card-game
   npm start
   ```

The application will automatically open in your default web browser at http://localhost:3000 (or http://localhost:3001 if port 3000 is occupied).

## Usage

1. View the English word on the card
2. Click the speaker icon to hear the pronunciation
3. Click "Show Translation" to see the Chinese meaning
4. Mark the word as "Mastered" if you know it
5. Mark as "Not Mastered" if you need more practice
6. Track your progress with the progress bar
7. When all words are mastered, you can restart the learning process

## Customizing Word List

To modify the word list, edit the file `src/data/words.ts`. Each word entry has three properties:
- `english`: The English word
- `chinese`: The Chinese translation
- `mastered`: Learning status (false by default)

Example of adding a new word:
```typescript
{ english: "new word", chinese: "新单词", mastered: false }
```

## Stopping the Application

To stop the application, press `Ctrl+C` in the terminal.

## Development

This project is built with:
- React
- TypeScript
- Material-UI
- Web Speech API for pronunciation

## License

MIT License
