import React from "react";
import { Flex, Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import "./Home.css";
import { Link } from "react-router-dom"; 


const Home = () => {

  return (
    <Box mx="auto" maxW="1200px" px={4}>

<Heading textAlign="center" mt="1.5rem" color="#ecc94b" style={{ fontSize: "3rem", fontFamily: "Roboto" }}>
  Jobify
</Heading>;

      
      <Flex direction={{ base: "column", md: "row" }} p={8} justify="center">
        {/* Left side */}
        <Box
          w={{ base: "100%", md: "70%" }}
          pr={{ base: 0, md: 16 }}
          mb={{ base: 8, md: 0 }}
          m={'6rem 0'}
          
        >
          <Heading as="h1" size="xl" mb={4} textAlign={'center'}>
            Unlock Your Opportunities
          </Heading>
          <Text fontSize="lg" mb={4}>
            A job portal serves as a vital link between job seekers and
            employers, offering a wide range of opportunities across industries.
            Job seekers can create profiles, upload resumes, and explore
            listings, while employers can efficiently post openings and find
            qualified candidates. These platforms streamline hiring, providing
            essential tools and resources for navigating the job market
            effectively.
          </Text>
          <Flex justify="center" mt={4} m={'2rem 0'}>
          <Button bg="#ecc94b">
        <Link to={'/jobs'}>Find Job</Link>
      </Button>
    </Flex>
        </Box>
        {/* Right side */}
        <Box w={{ base: "100%", md: "50%" }} m={'4rem 0'}>
          <Image
            src="https://pages.flock.com/hubfs/Stock%20images/Business%20woman%20looking%20at%20keyhole%20with%20bright%20cityscape%20concept%20background.jpeg"
            alt="Placeholder"
            objectFit="cover"
            w={'100%'}
          />
        </Box>
      </Flex>
      <div className="container">
        <div className="partner-images">
          <div className="partner partner1">
            <h3 className="partner-name">Millions of opportunities</h3>
            <p>
              Dive into an ocean of career possibilities with millions of job
              listings on our portal. Your dream job awaits, just a search away
            </p>
          </div>
          <div className="partner partner1">
            <h3 className="partner-name">Easy to manage jobs</h3>
            <p>
              Simplify your job management tasks effortlessly. With intuitive
              tools and features, stay organized and focused on what matters
              most in your career journey.
            </p>
          </div>
          <div className="partner partner1">
            <h3 className="partner-name">Top careers</h3>
            <p>
              Discover the top career paths shaping industries worldwide.
              Explore lucrative opportunities and chart your course towards
              success in high-demand fields
            </p>
          </div>
          <div className="partner partner1">
            <h3 className="partner-name">Search expert candidates</h3>
            <p>
              Find expert candidates efficiently with our advanced search tools.
              Streamline your hiring process and connect with top talent
              tailored to your specific needs
            </p>
          </div>
        </div>
      </div>
      <Box w={["90%", "50%"]} m={"3rem auto"}>
        <Heading textAlign={"center"} mb={"1rem"}>
          Join Us
        </Heading>
        <video
          autoPlay
          controls
          src={
            "https://videos.pexels.com/video-files/3209211/3209211-uhd_3840_2160_25fps.mp4"
          }
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </Box>
      <div className="container">
        <h2 className="heading">Our Partners</h2>
        <div className="partner-images">
          <div className="partner">
            <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202106/tcs_logo_1200_020621101143.jpg?size=1200:675" alt="Partner 1" className="partner-img" />
            <h3 className="partner-name">TCS</h3>
          </div>
          <div className="partner">
            <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-04/15/full/1618488020-548.jpg" alt="Partner 2" className="partner-img" />
            <h3 className="partner-name">Wipro</h3>
          </div>
          <div className="partner">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5DVy39AugZ7njt97GT1xWmsFUX1rUqBJxN03JOmkaA&s" alt="Partner 3" className="partner-img" />
            <h3 className="partner-name">Zomato</h3>
          </div>
          <div className="partner">
            <img src="https://static.realme.net/page/offer/images/Jio-194e345e69.jpg" alt="Partner 1" className="partner-img" />
            <h3 className="partner-name">Jio</h3>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Home;
