import { Box, Stack, VStack, Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import {TiSocialYoutubeCircular, TiSocialInstagramCircular} from 'react-icons/ti';
import {DiGithub} from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
      <Stack direction={['column','row']}>
        <VStack alignItems={['center','flex-start']} width={'full'}>
            <Heading children="All Rights are Reserved" color={'white'} />            
            <Heading children="@ Let's find your job" color={'yellow.400'} fontFamily={'body'} size={'sm'} />            
        </VStack>
        <HStack spacing={['2','10']} justifyContent={'center'} color={'white'} fontSize={'50'} >
            <a href="https://youtube.com" target={'blank'}>
                <TiSocialYoutubeCircular />
            </a>
            <a href="https://instagram.com" target={'blank'}>
                <TiSocialInstagramCircular />
            </a>
            <a href="https://github.com" target={'blank'}>
                <DiGithub />
            </a>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Footer
