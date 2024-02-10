import React from 'react';
import { Button, Input, Box, Container, Heading, Text } from 'theme-ui';

const Recipe = () => {
  return (
    <Box as="section" sx={styles.subscribe}>
      <Container>
        <Heading as="h3">What are you in the mood for today?</Heading>
        <Box as="form" sx={styles.form}>
          <Box as="label" htmlFor="subscribeEmail" variant="styles.srOnly">
            Email
          </Box>
          <Input
            placeholder="Banana bread with Nutella"
            type="email"
            id="subscribeEmail"
            sx={styles.input}
          />
          <Button type="submit" sx={styles.button}>
            Create
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Recipe;

const styles = {
  subscribe: {
    py: [null, null, null, null, null, '100px', '140px'],
    h3: {
      textAlign: 'center',
      fontSize: ['23px', null, null, null, null, '30px', '36px'],
      lineHeight: [1.5, null, null, '1'],
      letterSpacing: ['-0.5px'],
      mb: ['0px', null, null, '15px'],
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
    },
    p: {
      fontSize: ['16px'],
      color: '#fff',
      opacity: '.6',
      letterSpacing: ['-0.5px'],
      textAlign: 'center',
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
      mt: ['10px', null, null, '0'],
    },
  },
  form: {
    width: ['100%'],
    maxWidth: ['555px'],
    mx: ['auto'],
    display: ['flex'],
    flexWrap: ['wrap'],
    mt: ['30px', null, null, null, '30px'],
  },
  input: {
    width: ['100%'],
    maxWidth: ['100%', null, '370px', '380px'],
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#F8FAFC',
    outline: 'none',
    fontSize: '16px',
    pl: ['0px', null, null, '30px'],
    height: ['50px', null, null, '60px'],
    mr: ['0px', null, null, '15px'],
    textAlign: ['center', null, null, 'left'],
  },
  button: {
    backgroundColor: '#27AE60', // Earthy Green for primary action buttons
    borderRadius: '5px',
    fontWeight: '500',
    fontSize: ['18px'],
    color: '#FFFFFF', // White text for readability
    letterSpacing: '-0.5px',
    outline: 'none',
    padding: ['0px 30.75px'],
    minHeight: ['50px', null, null, '60px'],
    width: ['100%', null, null, 'auto'],
    mt: ['10px', null, null, '0'],
    mx: ['auto', null, null, '0'],
    '&:hover': {
      backgroundColor: '#1E8449', // A darker shade of Earthy Green for hover state
    },
    // Consider adding styles for secondary and disabled button states if needed
  },  
};
