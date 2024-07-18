import { Card, CardBody, CardHeader, Heading, Stack, Text } from "@chakra-ui/react";
import NewsLetterList from "./components/NewsLetterList";
import { NewsLetter } from "./models/NewsLetter";

interface NewsLetterPageProps {
    newsLetters: NewsLetter[];
}

function NewsLetterPage({newsLetters}: NewsLetterPageProps) {
    function groupBySite(newsLetters: NewsLetter[]): Record<string, NewsLetter[]> {
        return newsLetters.reduce((acc, newsLetter) => {
            if (!acc[newsLetter.site]) {
                acc[newsLetter.site] = [];
            }
            acc[newsLetter.site].push(newsLetter);
            return acc;
        }, {} as Record<string, NewsLetter[]>);
    }
    
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
            {Object.entries(groupBySite(newsLetters)).map(([siteName, newsLetters]) => (
                <NewsLetterList siteName={siteName} newsLetters={newsLetters}/>    
            ))}
        </Stack>
);
}

export default NewsLetterPage;