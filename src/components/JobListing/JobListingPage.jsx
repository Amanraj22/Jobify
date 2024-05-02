import { Box, Heading, SimpleGrid, Input, Flex } from '@chakra-ui/react';
import ReactPaginate from 'react-paginate';
import { useState, useEffect } from 'react';
import JobListing from './JobListing';
import './job.css';

const JobListingPage = () => {
  const [jobListings, setJobListings] = useState([
    { title: 'Software developer', company: 'Google', location: 'Banglore, India', post: 6 },
    { title: 'Game developer', company: 'Accenture', location: 'Gurgaon, India', post: 5 },
    { title: 'Software Engineer', company: 'TCS', location: 'Hyderabad, India', post: 2 },
    { title: 'Financial Analyst', company: 'Microsoft', location: 'Kolkata, India', post: 10 },
    { title: 'Data Science', company: 'Jio', location: 'Pune, India', post: 12 },
    { title: 'Artificial Intelligence', company: 'Google', location: 'Banglore, India', post: 20 },
    { title: 'Data Analyst', company: 'Accenture', location: 'Gurgaon, India', post: 1 },
    { title: 'Project Manager', company: 'TCS', location: 'Hyderabad, India', post: 8 },
    { title: 'Graphic Designer', company: 'Microsoft', location: 'Kolkata, India' },
    { title: 'Sales Representative', company: 'Jio', location: 'Pune, India', post: 22 },
  ]);
  const [filteredJobs, setFilteredJobs] = useState(jobListings); // State for filtered results
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 5;
  const [searchTerm, setSearchTerm] = useState(''); // New state for search term

  useEffect(() => {
    const filteredList = jobListings.filter((job) => {
      const searchTermLower = searchTerm.toLowerCase();
      return (
        job.title.toLowerCase().includes(searchTermLower) ||
        job.company.toLowerCase().includes(searchTermLower) ||
        job.location.toLowerCase().includes(searchTermLower)
      );
    });
    setFilteredJobs(filteredList);
  }, [searchTerm, jobListings]); // Re-filter on searchTerm or jobListings change

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = Math.ceil(filteredJobs.length / jobsPerPage);
  const offset = currentPage * jobsPerPage;
  const currentJobs = filteredJobs.slice(offset, offset + jobsPerPage);

  return (
    <Flex direction="column" alignItems="center" textAlign={'center'} justifyContent="center" minHeight="100vh">
      <Box width="90%" >
        <Heading as="h1" size="xl" mb="4" textAlign="center">
          Job Listings
        </Heading>
        <Input
          placeholder="Search by job role, company, or location..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          mb={4}
          width={'60%'}
        />
        <SimpleGrid columns={1} spacing={4}>
          {currentJobs.map((job, index) => (
            <JobListing
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              post={job.post}
            />
          ))}
        </SimpleGrid>
        <ReactPaginate
  pageCount={pageCount}
  pageRangeDisplayed={3}
  marginPagesDisplayed={1}
  onPageChange={handlePageChange}
  containerClassName="pagination"
  activeClassName="active"
/>

      </Box>
    </Flex>
  );
};

export default JobListingPage;
