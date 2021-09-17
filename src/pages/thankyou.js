import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import ThankYouCard from 'components/thankyou-card';


export default function ThankYou() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout footerWidgets={false}>
          <SEO title="Thank You" />
          <ThankYouCard />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
