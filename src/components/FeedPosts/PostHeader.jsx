import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2} my={3}>
        <Avatar src={avatar} alt="user profile pic" size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {username}
          <Box color={"gray.600"} fontWeight={500}>
            {" "}
            • 2d
          </Box>
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
