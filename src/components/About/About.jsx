import React from "react";
import { Flex, Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} p={8} justify="center">
      {/* Left side */}
      <Box
        w={{ base: "100%", md: "70%" }}
        pr={{ base: 0, md: 16 }}
        mb={{ base: 8, md: 0 }}
        m={"6rem 0"}
      >
        <Heading as="h1" size="xl" mb={4} textAlign={"center"}>
          Your Pathway to Success
        </Heading>
        <Text fontSize="lg" mb={4}>
          At our job portal, we are dedicated to empowering individuals on their
          journey towards career success. With a commitment to connecting talent
          with opportunity, we provide a comprehensive platform for job seekers
          and employers alike. Our user-friendly interface, coupled with
          advanced search tools, ensures that job seekers can efficiently
          explore a diverse range of job listings tailored to their skills and
          aspirations
        </Text>
        <Flex justify="center" mt={4} m={"2rem 0"}>
          <Button bg="#ecc94b">
            <Link to={"/jobs"}>Search Job</Link>
          </Button>
        </Flex>
      </Box>
      {/* Right side */}
      <Box w={{ base: "100%", md: "50%" }} m={"4rem 0"}>
        <Image
          src="https://www.workitdaily.com/media-library/image.jpg?id=19295921&width=980&quality=85"
          alt="Placeholder"
          objectFit="cover"
          w={"100%"}
        />
      </Box>
    </Flex>
  );
};

export default About;
