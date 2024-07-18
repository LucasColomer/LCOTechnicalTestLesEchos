import TitleUnderLine from "../../common/components/TitleUnderLine";
import { NewsLetter } from "../models/NewsLetter";
import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import NewsLetterCard from "./NewsLetterCard";

interface NewsLetterListProps {
    siteName: string;
    newsLetters: NewsLetter[];
}

function NewsLetterList({siteName, newsLetters}: NewsLetterListProps) {
  return (
    <Stack>
        <Box marginBottom={2}>
          <TitleUnderLine title={siteName} />
        </Box>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {newsLetters.map((newsLetter, index) => (
            <NewsLetterCard key={index} newsLetter={newsLetter}/>
          ))
          }
        </SimpleGrid>
    </Stack>
  );
}

export default NewsLetterList;