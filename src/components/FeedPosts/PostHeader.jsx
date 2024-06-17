import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2} my={3}>
        <Avatar src="/img1.png" alt="user profile pic" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          khianhyeu_trieutraitimtanvo_
          <Box color={"gray.500"}> • 2d</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          color={"blue.500"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
