import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { Avatar } from "antd";
import { useState } from "react";

const SuggestedUser = ({ followers, name, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar
          src={avatar}
          name={name}
          size={"md"}
          style={{ width: "50px", height: "50px" }}
        />
        <VStack spacing={2}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {followers} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {!isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
};

export default SuggestedUser;
