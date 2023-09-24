import {
    FormControl,
    FormLabel,
    Input,
    HStack,
    Container,
    Text,
    Stack,
    Flex,
    Spacer,
} from '@chakra-ui/react'
import './NewEvent.css'
import { useState, ChangeEvent } from 'react'

export const NewEvent = () => {
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("01/01/2020");
    const [startTime, setStartTime] = useState('2100');
    const [endTime, setEndTime] = useState('2300');
    const [host, setHost] = useState('');
    const [eventLink, setEventLink] = useState('test.huddle01');
    const [customUrl, setCustomUrl] = useState('www.test.some.io');
    const [currency, setCurrency] = useState("");
    const [sellerName, setSellerName] = useState('');
    const [floorPrice, setFloorPrice] = useState(0);

    const changeEventName = (e: ChangeEvent<HTMLInputElement>) => {
        setEventName(e.target.value);
    }

    const changeSellerName = (e: ChangeEvent<HTMLInputElement>) => {
        setSellerName(e.target.value);
    }

    const changeFloorPrice = (e: ChangeEvent<HTMLInputElement>) => {
        setFloorPrice(parseInt(e.target.value));
    }

    const changeStartTime = (e: ChangeEvent<HTMLInputElement>) => {
        setStartTime(e.target.value);
    }

    const changeEndTime = (e: ChangeEvent<HTMLInputElement>) => {
        setEndTime(e.target.value);
    }

    const changeCurrency = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrency(e.target.value);
    }

    const changeHuddleLink = (e: ChangeEvent<HTMLInputElement>) => {
        setEventLink(e.target.value);
    }

    const changeCustomURL = (e: ChangeEvent<HTMLInputElement>) => {
        setCustomUrl(e.target.value);
    }

    const changeEventDate = (e: ChangeEvent<HTMLInputElement>) => {
        setEventDate(e.target.value);
    }

    const changeHost = (e: ChangeEvent<HTMLInputElement>) => {
        setHost(e.target.value);
    }

    return (
        <Flex
            className='form-container'
            height='624px'
            width='800px'>
            <Container className='form-subcontainer' centerContent={true}>
                <Text
                    color='white'
                    fontSize='3xl'>Create New Event</Text>
                <FormControl>
                    <FormLabel
                        fontSize='sm'
                        color='#FFFFFFA6'>Event Name</FormLabel>
                    <Input
                        onChange={changeEventName}
                        value={eventName}
                        type="text"
                        color='#FFFFFFA6'
                        placeholder='Name this event'
                        borderRadius='15px'></Input>
                    <FormLabel
                        fontSize='sm'
                        color='#FFFFFFA6'>Seller's Name</FormLabel>
                    <Input
                        onChange={changeSellerName}
                        value={sellerName}
                        type="text"
                        color='#FFFFFFA6'
                        placeholder='Who is conducting this event'
                        borderRadius='15px' />
                    <FormLabel fontSize='sm' color='#FFFFFFA6'>Date of Event</FormLabel>
                    <Input
                        onChange={changeEventDate}
                        value={eventDate}
                        type="date"
                        color='#FFFFFFA6'
                        placeholder='Pick a date for this event'
                        borderRadius='15px' />
                    <HStack>
                        <Stack>
                            <FormLabel
                                fontSize='sm'
                                color='#FFFFFFA6'>Start Time</FormLabel>
                            <Input
                                onChange={changeStartTime}
                                value={startTime}
                                type="date"
                                color='#FFFFFFA6'
                                placeholder='extra small size'
                                borderRadius='15px' />
                        </Stack>
                        <Stack>
                            <FormLabel
                                fontSize='sm'
                                color='#FFFFFFA6'>End Time</FormLabel>
                            <Input
                                onChange={changeEndTime}
                                value={endTime}
                                type="date"
                                color='#FFFFFFA6'
                                placeholder='extra small size'
                                borderRadius='15px'></Input>
                        </Stack>
                    </HStack>
                    <HStack>
                        <Stack>
                            <FormLabel
                                fontSize='sm'
                                color='#FFFFFFA6'>Floor Price</FormLabel>
                            <Input
                                onChange={changeFloorPrice}
                                value={floorPrice}
                                type="number"
                                color='#FFFFFFA6'
                                placeholder='Starting bid price'
                                borderRadius='15px' />
                        </Stack>
                        <Stack>
                            <FormLabel
                                fontSize='sm'
                                color='#FFFFFFA6'>Currency</FormLabel>
                            <Input
                                onChange={changeCurrency}
                                value={currency}
                                type="string"
                                color='#FFFFFFA6'
                                placeholder='Currency/Token'
                                borderRadius='15px' />
                        </Stack>
                    </HStack>
                    <FormLabel
                        fontSize='sm'
                        color='#FFFFFFA6'>
                        Huddle Link
                    </FormLabel>
                    <Input
                        onChange={changeHuddleLink}
                        value={eventLink}
                        type="number"
                        color='#FFFFFFA6'
                        placeholder='Generate a huddle01 link'
                        borderRadius='15px' />
                    <FormLabel
                        fontSize='sm'
                        color='#FFFFFFA6'>Custom URL</FormLabel>
                    <Input
                        onChange={changeCustomURL}
                        value={customUrl}
                        type="number"
                        color='#FFFFFFA6'
                        placeholder='Pick a custom URL'
                        borderRadius='15px' />
                </FormControl>
            </Container>
            <Spacer />
            <Container className='form-subcontainer' centerContent={true}>
                <Text fontSize='4xl' color='#FFFFFFFF'>{eventName}</Text>
                <Text fontSize='md' color='#FFFFFFFF'>{eventDate}</Text>
                <Text fontSize='md' color='#FFFFFFFF'>{startTime}-{endTime}</Text>
                <Text fontSize='sm' color='#FFFFFFA6'>{host}</Text>
                <Text fontSize='sm' color='#FFFFFFA6'>{eventLink}</Text>
                <Text fontSize='sm' color='#FFFFFFA6'>{customUrl}</Text>
                <Text fontSize='4xl' color='#FFFFFFFF'>{currency}</Text>
            </Container>
        </Flex>
    )
}