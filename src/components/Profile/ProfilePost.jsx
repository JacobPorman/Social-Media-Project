import {
  Flex,
  GridItem,
  Text,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  Avatar,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";

const ProfilePost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>

            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Image
          src={img}
          alt="Profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader /> */}
          <ModalCloseButton />
          <ModalBody bg={"black"} p={0}>
            <Flex w={{ base: "90%", sm: "70%", md: "full" }} mx={"auto"}>
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
              >
                <Image src={img} alt="profile post" />
              </Box>
              <Flex
                flex={1}
                flexDir={"column"}
                display={{ base: "none", md: "flex" }}
              >
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  px={4}
                >
                  <Flex alignItems={"center"} gap={5} pt={2}>
                    <Avatar
                      src="/profilepic.png"
                      w={"40px"}
                      h={"40px"}
                      name="khianhyeu"
                    />
                    <Text fontSize={12} fontWeight={"bold"}>
                      khianhyeu_
                    </Text>
                  </Flex>

                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    mr={6}
                  >
                    <MdDelete size={20} cursor={"pointer"}></MdDelete>
                  </Box>
                </Flex>

                <Divider my={4} bg={"gray.900"} />

                <VStack
                  w={"full"}
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                  py={4}
                  px={4}
                  gap={10}
                >
                  <Comment
                    createdAt="1d ago"
                    username="khianhyeu_"
                    profilePic="/profilepic.png"
                    text="Hmmmmmmm"
                  />
                  <Comment
                    createdAt="1w ago"
                    username="jacobportman"
                    profilePic={
                      "https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg"
                    }
                    text="Pretty cool guy!"
                  />
                  <Comment
                    createdAt="2w ago"
                    username="emmabloom"
                    profilePic={
                      "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                    text="Nice job!"
                  />
                </VStack>

                <Box mt={"auto"}>
                  <Divider bg={"gray.900"} />

                  <Box px={4}>
                    <PostFooter isProfilePage={true} />
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
