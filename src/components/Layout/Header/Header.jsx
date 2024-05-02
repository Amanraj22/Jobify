import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme={'yellow'}
        width={'12'}
        height={'12'}
        rounded={'full'}
        zIndex={'overlay'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu5Fill></RiMenu5Fill>
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(0.5px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>Find Your Job</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              {/* <LinkButton onClose={onClose} url="/" title="Home" /> */}
              <LinkButton onClose={onClose} url="/home" title="Home" />
              <LinkButton onClose={onClose} url="/jobs" title="Jobs" />
              <LinkButton onClose={onClose} url="/about" title="About" />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
