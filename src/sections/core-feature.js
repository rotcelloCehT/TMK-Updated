/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import FeatureThumb from 'assets/images/carpentry.jpg';
import shapePattern from 'assets/shape-pattern2.png';

const data = {
  subTitle: 'Services',
  title: 'Working with passion',
  description:
    'TMK Inc. is small enough to care and large enough to get the job done. We have decades of Carpentry experience and experience in all types of construction. Ultimately, we are a family business and we treat our customers the same way.',
  btnName: 'Contact',
  btnURL: 'contact',
  btnOffset: -100,
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: 'section.coreFeature' }} id="services">
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            btnOffset={data.btnOffset}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      borderRadius: '15px',
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
