import { Box, Image } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const FeedPost = () => {
  return (
    <div>
      <PostHeader />
      <Box>
        <Image src="/img1.png" alt="user profile pic" borderRadius={"5px"} />
      </Box>
      <PostFooter />
    </div>
  );
};

export default FeedPost;
