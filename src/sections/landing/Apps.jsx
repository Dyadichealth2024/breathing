import React, { useState, useRef, useEffect } from 'react';

// material-ui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';

// project-imports
import FadeInWhenVisible from './Animation';

// Questions and predefined responses for each category
const QUESTIONS = {
  parenting: [
    {
      question: "How do you approach discipline with your child?",
      response: "Discipline is essential, and consistency is key. It's important to balance firmness with understanding."
    },
    {
      question: "What are the key values you want to instill in your child?",
      response: "Values like honesty, respect, and empathy are foundational to raising well-rounded children."
    },
    {
      question: "How do you balance work and parenting?",
      response: "Balancing work and parenting requires setting boundaries and prioritizing time with your children."
    },
    {
      question: "What strategies do you use for effective communication with your child?",
      response: "Active listening and clear expectations are crucial for effective communication with children."
    }
  ],
  spousal_relationships: [
    {
      question: "How do you maintain healthy communication with your spouse?",
      response: "Regular check-ins and open dialogue help maintain a healthy communication flow in marriage."
    },
    {
      question: "What are the most common conflicts in your marriage and how do you resolve them?",
      response: "Common conflicts often revolve around money, responsibilities, and parenting. Resolution requires compromise and understanding."
    },
    {
      question: "How do you keep the romance alive in your relationship?",
      response: "Keeping romance alive involves consistent effort, like planning date nights and showing appreciation."
    },
    {
      question: "What role does trust play in your relationship?",
      response: "Trust is the foundation of any strong relationship, fostering security and openness between partners."
    }
  ],
  family: [
    {
      question: "How do you manage family conflicts?",
      response: "Managing family conflicts requires patience, open communication, and a willingness to compromise."
    },
    {
      question: "What traditions do you follow in your family?",
      response: "Traditions like holiday celebrations and weekly dinners strengthen family bonds."
    },
    {
      question: "How do you support each other's growth in your family?",
      response: "Supporting growth means encouraging each other and respecting individual goals."
    },
    {
      question: "What are the biggest challenges your family faces?",
      response: "Common challenges include time management and balancing the needs of each family member."
    }
  ],
  quality_relationships: [
    {
      question: "How do you define a quality relationship?",
      response: "A quality relationship is built on mutual respect, trust, and emotional support."
    },
    {
      question: "What are the key ingredients to maintaining a strong relationship?",
      response: "Good communication, mutual respect, and understanding are essential to maintaining a strong relationship."
    },
    {
      question: "How do you handle disagreements in your relationships?",
      response: "Handling disagreements calmly and finding a compromise is key to resolving conflicts."
    },
    {
      question: "What role does empathy play in your relationships?",
      response: "Empathy allows partners to understand each other's perspectives, strengthening the relationship."
    }
  ]
};

const Technologies = [
  {
    title: 'Dyadic Health',
    category: 'parenting',
    description: 'Dyadic Health being the healh of those in dyadic relationship - a relationship of a dyad(pair) - Engage in activities that are fundamental to any dyadic relationship and make yourself robust for any dyadic relationship.'
  },
  {
    title: 'Spousal Dyad',
    category: 'spousal_relationships',
    description: 'Activities focussing on - each partner\'s health, underscoring the importance of fostering unity, empathy, and shared values within the home while maintaining the intimacy spark.'
  },
  {
    title: 'Parental Dyad',
    category: 'family',
    description: 'Activities focussing on - being a balanced parent, providing guidance, security, and love as underlying attributes to the child.'
  },
  {
    title: 'Other Common Dyads',
    category: 'quality_relationships',
    description: 'Activities focussing on -  personal boundaries and preferences, encouraging personal growth and development, collaborating, and addressing conflicts constructively - with various other dyadic relationships we encounter day to day.'
  }
];

// ==============================|| LANDING - AppsPage ||============================== //

export default function AppsPage() {
  const theme = useTheme();
  const [slideIndex, setSlideIndex] = useState(0);
  const [chat, setChat] = useState([{ text: "Please select a question to get started.", isBot: true }]);
  const [activeCategory, setActiveCategory] = useState(null);
  const chatContainerRef = useRef(null);

  const handleChange = (index) => {
    const category = Technologies[index].category;
    setChat([{ text: "Please select a question to get started.", isBot: true }]);
    setSlideIndex(index);
    setActiveCategory(category);
  };

  const handleQuestionClick = (questionObj) => {
    // Add the selected question to the chat
    const newChat = [...chat, { text: questionObj.question, isBot: false }];
    // Add the bot's response to the chat
    setChat([...newChat, { text: questionObj.response, isBot: true }]);
  };

  // Automatically scroll to the bottom of the chat container when a new message is added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chat]);

  return (
    <Box sx={{ bgcolor: theme.palette.primary.main, overflow: 'hidden', pt: { md: 10, xs: 5 }, position: 'relative' }}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center" sx={{ textAlign: 'center', marginBottom: 3 }}>
              <Grid item xs={12}>
                <Typography variant="h2" color="white">
                  Interactive Chatbot
                </Typography>
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography color="white">
                  Engage with our chatbot by selecting a category and choosing questions to get responses!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ pt: { md: 10, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={3} alignItems="start">
              <Grid item xs={12} md={6}>
                <Box pb={{ xs: 0, md: 10 }}>
                  <Grid container spacing={1.5} alignItems="center">
                    {Technologies.map((tech, index) => (
                      <Grid item xs={12} key={index}>
                        <FadeInWhenVisible>
                          <Button
                            onClick={() => handleChange(index)}
                            sx={{
                              p: 3,
                              borderRadius: 1.5,
                              ...(slideIndex === index && {
                                background: alpha(theme.palette.secondary.lighter, 0.13),
                                boxShadow: theme.customShadows.z1,
                                '&:hover': { background: alpha(theme.palette.secondary.lighter, 0.13), boxShadow: theme.customShadows.z1 }
                              })
                            }}
                            variant="light"
                          >
                            <Grid container textAlign="start" spacing={2}>
                              <Grid item xs={12}>
                                <Typography variant="h4" color="white">
                                  {tech.title}
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography color="white">{tech.description}</Typography>
                              </Grid>
                            </Grid>
                          </Button>
                        </FadeInWhenVisible>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  ref={chatContainerRef}
                  sx={{
                    mt: 3,
                    width: '100%',
                    p: 3,
                    backgroundColor: 'white',  // Background color changed to white
                    borderRadius: 1.5,
                    color: theme.palette.text.primary,  // Adjusted text color to ensure readability
                    height: '600px',
                    overflowY: 'auto'
                  }}
                >
                  {chat.map((message, index) => (
                    <Box
                      key={index}
                      sx={{
                        textAlign: message.isBot ? 'left' : 'right',
                        mb: 2
                      }}
                    >
                      <Typography
                        sx={{
                          display: 'inline-block',
                          padding: '10px',
                          borderRadius: '10px',
                          backgroundColor: message.isBot
                            ? 'rgba(0, 153, 255, 1)'
                            : 'rgba(178, 102, 255, 1)',
                          color: message.isBot ? theme.palette.primary.contrastText : theme.palette.secondary.contrastText
                        }}
                      >
                        {message.text}
                      </Typography>
                    </Box>
                  ))}
                  {activeCategory && (
                    <Box sx={{ mt: 2 }}>
                      {QUESTIONS[activeCategory].map((questionObj, i) => (
                        <Button
                          key={i}
                          variant="contained"
                          sx={{
                            m: 1,
                            textTransform: 'none',
                            backgroundColor: alpha(theme.palette.secondary.main, 0.8),
                            '&:hover': { backgroundColor: alpha(theme.palette.secondary.main, 1) }
                          }}
                          onClick={() => handleQuestionClick(questionObj)}
                        >
                          {questionObj.question}
                        </Button>
                      ))}
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <IconButton
        aria-label="chat"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: alpha(theme.palette.secondary.main, 0.7),
          '&:hover': {
            backgroundColor: alpha(theme.palette.secondary.main, 1),
          },
        }}
      >
        <ChatIcon sx={{ color: 'white', fontSize: 32 }} />
      </IconButton>
    </Box>
  );
}
