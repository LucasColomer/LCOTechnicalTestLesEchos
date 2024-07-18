import { Card, CardBody, CardHeader, Heading, Stack, Text } from "@chakra-ui/react";
import NewsLetterList from "./components/NewsLetterList";
import { useSelector } from "react-redux";
import { getNewsLettersBySite } from "./models/NewsLetterSlice";

function NewsLetterPage() {
    const newsLettersBySite = useSelector(getNewsLettersBySite);
    
    return (
        <Stack spacing={8}>
            <Card align={'center'} backgroundColor={'neutral.microContrast'}>
                <CardHeader>
                    <Heading as='h1' size='lg'>Newsletters</Heading>
                </CardHeader>
                <CardBody>
                    <Text fontSize='lg' align={'center'}>
                        Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites.
                        Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos newsletters.
                    </Text>
                </CardBody>
            </Card>
            {Object.entries(newsLettersBySite).map(([siteName, newsLetters]) => (
                <NewsLetterList key={siteName} siteName={siteName} newsLetters={newsLetters}/>    
            ))}
        </Stack>
);
}

export default NewsLetterPage;