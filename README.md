# Word Pronunciation Recognition Game

## Project Introduction

This is a web-based word pronunciation recognition game developed with the assistance of GPT-O4-Mini-High. The game aims to help users recognize and memorize words by listening to their pronunciations, particularly suitable for English learners.

## Features

- **Word Recognition by Sound**: Plays word pronunciations for users to recall
- **Timed Challenge**: Users have 1.5 seconds to recognize each word
- **Progress Tracking**: Displays mastered words count and overall progress
- **Smart Review**: Words not recognized in time are added back to the learning queue
- **Customizable Vocabulary**: Users can modify the word list according to their needs

## How to Use

1. Open the `word_card.html` file in a browser
2. Click the "Start" button to begin
3. Listen to the word pronunciation and try to recall the word within 1.5 seconds
4. If you can recall the word, wait for the word and translation to display, then click "Next"
5. If you cannot recall, the system will automatically display the word and translation, and the word will be added back to the learning queue
6. Continue learning until you master all words

## Game Interface

### Start Screen
![Start Screen](assets/begin.png)

### Game Running
![Game Running](assets/run.png)

## Customize Vocabulary

You can customize the vocabulary by modifying the vocabulary array in the `word_card.html` file:

```javascript
const vocabulary = [
  { english: "baroque", chinese: "巴洛克式的（豪华繁复的）" },
  { english: "span",    chinese: "跨度；持续时间" },
  { english: "tend",    chinese: "倾向；照料" },
  { english: "imbue",   chinese: "使感染，使渗透" },
  { english: "depict",  chinese: "描绘；描述" }
  // Add more words...
];
```

You can also use GPT-O4-Mini to generate more words and translations by providing the type or topic of words you want to learn.

## Technical Implementation

- Pure HTML/CSS/JavaScript implementation, no additional dependencies required
- Uses Youdao Dictionary API for word pronunciations
- Responsive design, adapts to different device screens