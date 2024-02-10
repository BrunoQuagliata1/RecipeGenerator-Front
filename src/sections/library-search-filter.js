/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import { Box, Container, Button, Heading, Input, Grid } from 'theme-ui';
import { keyframes } from '@emotion/core';
import dotPattern from 'assets/dot-pattern.svg';
import DropdownMenu from 'components/filter/filter';
import FavoriteCard from 'components/favorite-card';
import { Swiper, SwiperSlide } from 'swiper/react';

import fevCardImageOne from 'assets/new-assets/famous-recipes/vegan-chocolate-cheesecake.jpg';
import fevCardImageTwo from 'assets/new-assets/famous-recipes/watermelon-with-lime-dressing-and-peanuts.jpg';
import fevCardImageThree from 'assets/new-assets/famous-recipes/watermelon-with-yogurt-poppy-seeds-and-fried-rosemary.jpg';
import fevCardImageFour from 'assets/new-assets/famous-recipes/white-balsamic-jicama-slaw-358170.jpg';



const favoriteCourseData = [
  {
    title: 'How to work with prototype design with adobe xd featuring tools',
    image: fevCardImageOne,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '2,538 students watched',
    videoLink: 'g9avOpUOREM',
    starCount: 5,
  },
  {
    title:
      'Create multiple artboard by using figma prototyping tools development',
    image: fevCardImageTwo,
    reviewCount: '4.5 (524 reviews)',
    watchCount: '3,532 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 4,
  },
  {
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    image: fevCardImageThree,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },
  {
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    image: fevCardImageFour,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },
  {
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    image: fevCardImageFour,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },
  {
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    image: fevCardImageFour,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },
  {
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    image: fevCardImageFour,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },
  {
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    image: fevCardImageFour,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },
  {
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    image: fevCardImageFour,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },
  {
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    image: fevCardImageFour,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },
  {
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    image: fevCardImageFour,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },
  {
    title:
      'Convert your web layout theming easily with sketch zeplin extension',
    image: fevCardImageFour,
    reviewCount: '5.0 (392 reviews)',
    watchCount: '1,037 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
  },

];

const gridStyles = {
  display: 'grid',
  gap: 0, // this is the space between grid items
  gridTemplateColumns: [
    '1fr', // for smallest screens
    '1fr', // placeholder for the next breakpoint (if needed)
    'repeat(2, 1fr)', // for medium screens
    'repeat(3, 1fr)', // for large screens
    'repeat(4, 1fr)', // for extra large screens
  ],
  paddingBottom: '10rem',
};

const Featured = () => {
  const [tab, setTab] = useState({
    active: 'time',
  });

  const [activeDropdown, setActiveDropdown] = useState('');

  const handleToggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown('');
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const tabButtonWrapperStyles = {
    transition: 'padding-bottom 0.3s ease',
    paddingBottom: activeDropdown ? '200px' : '0',
  };
  
  return (
    <Box as="section" sx={styles.featured}>
      <Container sx={styles.container}>
        <Heading as="h3">Search in our library of recipes</Heading>
        <Box as="form" sx={styles.form}>
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
        <Box sx={styles.tabButtonTopWrapper}>
          <Box sx={{...styles.tabButtonWrapper, ...tabButtonWrapperStyles}}>
            <DropdownMenu buttonName="time" onToggle={handleToggleDropdown} onClose={() => setActiveDropdown('')}/>
            <DropdownMenu buttonName='cuisine' onToggle={handleToggleDropdown}  onClose={() => setActiveDropdown('')}/>
            <DropdownMenu buttonName='meal' onToggle={handleToggleDropdown} onClose={() => setActiveDropdown('')}/>
            <DropdownMenu buttonName='ingredient' onToggle={handleToggleDropdown} onClose={() => setActiveDropdown('')}/>
            <DropdownMenu buttonName='diet' onToggle={handleToggleDropdown} onClose={() => setActiveDropdown('')}/>
            <DropdownMenu buttonName='event' onToggle={handleToggleDropdown} onClose={() => setActiveDropdown('')}/>
            <DropdownMenu buttonName='method' onToggle={handleToggleDropdown} onClose={() => setActiveDropdown('')}/>
          </Box>
        </Box>
        <Box sx={styles.tabContent}>
        <Grid sx={gridStyles}>
          {favoriteCourseData.map((course, index) => (
            <Box key={index} sx={{ padding: '5px' }}> {/* Add padding to each grid item if needed */}
              <FavoriteCard
                starCount={course.starCount}
                title={course.title}
                image={course.image}
                reviewCount={course.reviewCount}
                watchCount={course.watchCount}
                videoLink={course.videoLink}
              />
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Featured;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const styles = {
  form: {
    display: 'flex', // This makes all child elements line up horizontally
    alignItems: 'center', // This aligns the children vertically in the center
    justifyContent: 'space-between', // Adjust as needed, this example puts space between the input and button
    paddingBottom: '3rem', // Add some space between the form and the tabs, adjust as needed
    // Add additional styling as needed for the form
  },
  input: {
    flex: 1, // This allows the input to grow and fill the available space
    marginRight: '1rem', // Add some space between the input and the button, adjust as needed
    // Add additional styling as needed for the input
  },
  h3: {
    display: 'flex'
  },
  featured: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  container: {
    position: 'relative',
    top: '150px',
    mt: '-150px',
  },
  tabButtonTopWrapper: {
    overflowY: [null, null, null, null, null, 'inherit'],
    overflowX: ['auto', null, null, null, null, 'inherit'],
  },
  tabButtonWrapper: {
    width: ['700px', null, null, null, null, '100%'],
    mx: ['auto', null, null, null, null, '0'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid rgba(1,7,13,.1)',
    mb: '35px',
    button: {
      display: 'flex',
      alignItems: 'center',
      pb: ['15px', null, null, null, '35px'],
      px: ['15px', null, null, null, '30px'],
      flexShrink: '0',
      border: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#0F2137',
      fontSize: ['14px', null, null, null, '18px'],
      fontWeight: 500,
      lineHeight: 1,
      position: 'relative',
      transition: 'all 500ms ease',
      svg: {
        fontSize: ['18px', null, null, null, '30px'],
        color: '#ADBDD0',
        opacity: 0.7,
        mr: '15px',
        transition: 'all 500ms ease',
      },
      '&:hover, &.active': {
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#0F2137',
        svg: {
          color: '#0F2137',
          opacity: 1,
        },
        '&::before': {
          transform: 'scale(1,1)',
        },
      },
      '&::before': {
        content: "''",
        position: 'absolute',
        bottom: '-2px',
        backgroundColor: '#0F2137',
        left: 0,
        width: '100%',
        height: '3px',
        transform: 'scale(0,1)',
        transition: 'transform 500ms ease',
      },
    },
  },
  tabContent: {
    minHeight: ['190px', null, '300px', '385px', null, '600px'],
    position: 'relative',
    '&::before': {
      content: "''",
      width: '302px',
      height: '347px',
      backgroundImage: `url(${dotPattern})`,
      position: 'absolute',
      bottom: '-30px',
      right: '-40px',
      display: ['none', null, null, null, null, 'block'],
    },
    '.tabImage': {
      position: 'relative',
      animation: `${fadeIn} 0.8s linear`,
    },
  },
};
