import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack px={6} py={8} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser
        name="Jacob Porman"
        followers={1538}
        avatar="https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg"
      />
      <SuggestedUser
        name="Emma Bloom"
        followers={4408}
        avatar="https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      <SuggestedUser
        name="Bronwyn Bruntley"
        followers={2538}
        avatar="https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        @ 2024 Built By{" "}
        <Link
          href="https://github.com/JacobPorman"
          target="_blank"
          fontSize={14}
          color={"gray.400"}
        >
          As khianhyeu_
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
