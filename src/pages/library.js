import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import FAQ from 'sections/faq';
import Subscribe from 'sections/subscribe';
import RecipeLibrary from 'sections/library/recipe-library';

const RecipesLibrary = () => {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Startup Landing 014" />
          <RecipeLibrary />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
};

export default RecipesLibrary;
