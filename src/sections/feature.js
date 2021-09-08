/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Ruler from 'assets/icons/ruler.svg';
import Hammer from 'assets/icons/hammer.svg';
import Tape from 'assets/icons/measuring.svg';
import Circular from 'assets/icons/brush.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Ruler,
    altText: 'Quality Products',
    title: 'Quality Products',
    text:
      'TMK Inc. can source the highest grade hardwoods, repurposed furniture, reclaimed wood. We can also provide cost effective laminates, Medium-Density Fiberboard (MDF) and melamine board.',
  },
  {
    id: 2,
    imgSrc: Hammer,
    altText: 'Original Projects',
    title: 'Original Projects',
    text:
      'Every situation is unique, requiring slight modifications, adjustments or additions. We evaluate the space, listen to what the customer wants and provide a design. Our design is based on our previous experiences and what is most practical.',
  },
  {
    id: 3,
    imgSrc: Tape,
    altText: 'Specified Millwork',
    title: 'Specified Millwork',
    text:
      'Tmk Inc. has supplied numerous Commercial, Institutional and Industrial millwork according to design Specifications.',
  },
  {
    id: 4,
    imgSrc: Circular,
    altText: 'Artisanal Craftsmanship',
    title: 'Artisanal Craftsmanship',
    text:
      'Working with customers to bring their vision to reality. We design everything from the group up by hand.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Amazing useful features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
