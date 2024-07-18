import { Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react";
import { NewsLetter } from "../models/NewsLetter";
import SubscribeButton, { ButtonType } from "./SubscribeButton";

interface NewsLetterCardProps {
    newsLetter: NewsLetter;
}

function NewsLetterCard({newsLetter}: NewsLetterCardProps) {
    const image = 'url(' + newsLetter.image + ')';
    return (
        <Card variant={'unstyled'}>
            <CardHeader
                backgroundImage={image}
                backgroundPosition="center"
                height={200}
                backgroundSize={'cover'}
                justifyContent={'center'}
                alignContent={'center'}
                padding={8}>
                <Heading color={'white'} textAlign={'center'} size={'lg'}>
                    {newsLetter.title}
                </Heading>
            </CardHeader>
            <CardBody margin={4}>
                <Text fontSize={'md'} align={'center'}>
                    {newsLetter.description}
                </Text>
            </CardBody>
            <CardFooter justifyContent={'center'}>
                <SubscribeButton type={ButtonType.subscribe} onClick={() => {}}/>
            </CardFooter>
        </Card>
    );
}

export default NewsLetterCard;