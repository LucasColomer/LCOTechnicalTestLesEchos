import { Box, Heading } from "@chakra-ui/react";

function TitleUnderLine({ title }: { title: string }) {
  return (
    <>
        <Heading size={'lg'}>{title}</Heading>
        <Box bg={'primary.500'} p={1} borderRadius={10} w={100} marginBlock={2}/>
    </>
  );
}

export default TitleUnderLine;