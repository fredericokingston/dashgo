import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Frederico Velho</Text>
        <Text color="gray.300" fontSize="small">
          fredericovcoelho@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Diego Fernandes" src="http://github.com/fredericokingston.png"/>
    </Flex>
  );
}