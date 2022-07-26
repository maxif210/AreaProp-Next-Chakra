import Link from 'next/link'
import {Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Divider } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import {FiKey} from 'react-icons/fi'
import Image from 'next/image'
import house from '../assets/house.svg'
import wave from '../assets/wave.svg'

const Navbar = () => {
  return (
    <>
    
    <Flex p='2' >
        <Box fontSize='3xl' color='#f4f5ff' fontWeight='bold'>
            <Flex gap='2'>
            <Link href='/' paddingLeft='2'>AreaProp </Link>
            <Image src={house} alt='iconhouse'/>
            </Flex>
        </Box>
        <Spacer/>
        <Box >
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400' bg='#f7f1ff' _hover={{ bg: '#a0289d' }} _active={{bg: '#a0289d'}} />
                <MenuList>
                    <Link href='/' passHref>
                    <MenuItem icon={<FcHome/>}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                    <MenuItem icon={<BsSearch/>}>Search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                    <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                    <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
    <Box position='absolute' >
    <Image src={wave} alt='wave'/>
    </Box>
    </>
  )
}

export default Navbar