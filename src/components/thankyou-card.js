/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button} from 'theme-ui';
import Link from 'next/link';
import TMKLogo from 'assets/tmklogo.svg';
import EmailImg from 'assets/images/email-image.svg';
import BannerImg from 'assets/tools.svg';
import KitchenImg from 'assets/images/kitchen.jpg';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function Banner() {
  return (
    <section sx={styles.thankyou} id="home">
      <Container sx={styles.thankyou.container}>
        <Box sx={styles.thankyou.contentBox}>
          <Heading as="h1" variant="heroPrimary" color="primary">
            Thank You For Your Inquiry
          </Heading>
          <Text as="p" variant="heroSecondary">
            We'll get back to you withing 48 hours.
          </Text>
          <Box sx={styles.thankyou.imageBox}>
          <Image src={EmailImg} alt="banner" width="100%" />
        </Box>
        </Box>
        

        <Box sx={styles.thankyou.contentBox}>
        <Link variant="blog" href={'/'}>
          <Button variant="primary">Back To Home</Button>
        </Link>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  thankyou: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      mb: 100,
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
      img: {
        mb: '50px',
      },
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        maxWidth: ['80%', '80%'],
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
