import { Box, Button, Text, VStack } from "@chakra-ui/react";

const JobListing = ({ title, company, location, post }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      m="4"
      width={{ base: "90%", md: "70%" }} 
      marginX="auto" 
    >
      <Box
        display={{ base: "block", md: "flex" }} 
        justifyContent={{ md: "space-between" }} 
        marginBottom={{ base: "1rem", md: 0 }} 
      >
        <Text>Job role: {title}</Text>
        <Text>Company name: {company}</Text>
        <Text>Location: {location}</Text>
        <Text>Available post: {post}</Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop={{ base: "1rem", md: "2rem" }}
        marginBottom="1rem" 
      >
        <VStack>
          <Button bg="#ecc94b">Apply</Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default JobListing;
