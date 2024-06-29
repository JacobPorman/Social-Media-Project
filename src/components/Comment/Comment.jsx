import { Avatar, Flex, Text } from "@chakra-ui/react";

const Comment = ({ createdAt, username, profilePic, text }) => {
  return (
    <Flex gap={4} alignItems={"center"}>
      <Avatar src={profilePic} username={username} w={"40px"} h={"40px"} />
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontSize={12} fontWeight={"bold"}>
            {username}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>

        <Text fontSize={12} color={"gray.500"}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
