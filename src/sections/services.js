import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/new-assets/service/service1.svg';
import serviceImage2 from 'assets/new-assets/service/service2.svg';
import serviceImage3 from 'assets/new-assets/service/service3.svg';


const SERVICES_DATA = [
  {
    image: serviceImage1,
    text: 'Tell us what you are craving by typing in a dish or ingredients. Our search understands natural language. Feel free to be as specific or as broad as you like. Remember to specify dietary preferences and allergies',
    heading: 'Enter your Craving',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      "Our AI chef crafts a custom recipe for you. Using advanced algorithms, it considers your preferences and dietary restrictions to craft a recipe tailored just for you. It's like having a personal chef who knows exactly what you like.",
    heading: 'Magic in the Making',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      "Follow the step-by-step instructions to culinary delight. Each recipe is designed to be easy to follow, ensuring you have a fun and stress-free cooking experience. So, roll up your sleeves, and let’s bring the joy of cooking back to your kitchen!",
    heading: 'Cook & Enjoy!',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Personalized Recipes: Tailored to Your Taste and Pantry"
          text="Transform the way you cook with just a few clicks. Our AI Chef takes you from craving to cooking in minutes."
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
