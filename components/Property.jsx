import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Box, Flex, Text, Avatar} from '@chakra-ui/react'
import{FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import millify from 'millify'
import DefaultImage from '../assets/house.jpg'

const Property = ({property:{coverPhoto, price, rentFrecuency, romms, title, baths, area, agency, isVerified, externalID}}) => (
 <Link href={`/property/${externalID}`} passHref>
  <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
    <Box>
        <Image  src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt='house' />
    </Box>
    <Box w='full'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center'>
                <Box paddingRight='3' color='#a0289d'>{isVerified && <GoVerified/>}</Box>
                <Text fontWeight='bold' color="#f7f1ff" fontSize='lg'>AED{millify(price)}{rentFrecuency && `/${rentFrecuency}`}</Text> 
            </Flex>
            <Box width={100}>
                <Avatar size='md' src={agency?.logo?.url} />
            </Box>
 
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
        {romms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/>
        </Flex>
        <Text fontSize='lg' color="#f7f1ff">
            {title.length > 30 ? `${title.substring(0,30)}... ` : title}
        </Text>
    </Box>
  </Flex>
 </Link>
)

export default Property