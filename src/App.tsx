import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box,
  IconButton,
  LinearProgress,
  Grid
} from '@mui/material';
import { VolumeUp, Check, Close } from '@mui/icons-material';
import { words, Word } from './data/words';

function App() {
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [progress, setProgress] = useState(0);
  const [masteredCount, setMasteredCount] = useState(0);

  useEffect(() => {
    selectRandomWord();
    updateProgress();
  }, []);

  const selectRandomWord = () => {
    const unmasteredWords = words.filter(word => !word.mastered);
    if (unmasteredWords.length === 0) {
      setCurrentWord(null);
      return;
    }
    const randomIndex = Math.floor(Math.random() * unmasteredWords.length);
    setCurrentWord(unmasteredWords[randomIndex]);
    setShowTranslation(false);
  };

  const updateProgress = () => {
    const mastered = words.filter(word => word.mastered).length;
    setMasteredCount(mastered);
    setProgress((mastered / words.length) * 100);
  };

  const handleMastered = () => {
    if (currentWord) {
      currentWord.mastered = true;
      updateProgress();
      selectRandomWord();
    }
  };

  const handleNotMastered = () => {
    selectRandomWord();
  };

  const speakWord = () => {
    if (currentWord) {
      const utterance = new SpeechSynthesisUtterance(currentWord.english);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!currentWord) {
    return (
      <Container maxWidth="sm">
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            恭喜！你已经掌握了所有单词！
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => {
              words.forEach(word => word.mastered = false);
              updateProgress();
              selectRandomWord();
            }}
          >
            重新开始
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ mb: 3, height: 10, borderRadius: 5 }}
        />
        <Typography variant="h6" gutterBottom>
          进度: {masteredCount}/{words.length} 个单词
        </Typography>
        
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                {currentWord.english}
              </Typography>
              <IconButton onClick={speakWord} color="primary">
                <VolumeUp />
              </IconButton>
            </Box>
            
            {showTranslation && (
              <Typography variant="h5" color="text.secondary">
                {currentWord.chinese}
              </Typography>
            )}
          </CardContent>
        </Card>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              color="success"
              startIcon={<Check />}
              onClick={handleMastered}
            >
              已掌握
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              startIcon={<Close />}
              onClick={handleNotMastered}
            >
              未掌握
            </Button>
          </Grid>
        </Grid>

        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => setShowTranslation(!showTranslation)}
        >
          {showTranslation ? '隐藏翻译' : '显示翻译'}
        </Button>
      </Box>
    </Container>
  );
}

export default App; 