/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import KitchenImage1 from 'assets/images/compressed3.jpg';
import KitchenImage2 from 'assets/images/floor1.jpg';
import KitchenImage3 from 'assets/images/floor2.jpg';
import KitchenImage4 from 'assets/images/compressed5.jpg';
import Sample1 from 'assets/images/sample1.webp';
import Avatar1 from 'assets/testimonial/avatar1.png';
import Avatar2 from 'assets/testimonial/avatar2.png';
import Avatar3 from 'assets/testimonial/avatar3.png';
import Avatar4 from 'assets/testimonial/avatar4.png';

const data = [
  {
    id: 1,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: KitchenImage1,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },
  {
    id: 2,
    title: 'Design Quality & performance',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: KitchenImage2,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 3,
    title: 'Layout and organized layers',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: KitchenImage1,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
  },
  {
    id: 4,
    title: 'Modern look & trending design',
    description:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    avatar: KitchenImage2,
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
  return (
    <section id="gallery" sx={{ variant: 'section.testimonial' }}>
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader slogan="Our Work" title="Your Imagination Is Our Creation" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          // customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={true}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <div className="image">
                <Image src={item.avatar} alt="Client Image" />
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    mt: '-30px',
    mb: '-60px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      // maxWidth: ['100%','100%', '100%', '100%', '100%', '100%', '100%', '80%'],
      maxWidth: '100%',
      // backgroundColor: ['red', 'green', 'yellow', 'pink', 'purple', 'orange', 'blue', 'lime'],
      mr: 'auto',
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
    },
  },
  reviewCard: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.image': {
      flexShrink: 0,
      display: 'flex',
      img: {
        width: 'auto',
        height: 'auto',
        maxHeight: ['100vh','100vh', '100vh', '100vh', '100vh', '80vh', '80vh', '80vh'],
        objectFit: 'cover',
      },
    },
  },
};
