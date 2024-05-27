import { Container, Text, VStack, Spinner, Alert, AlertIcon, Box } from "@chakra-ui/react";
import { usePosts } from '../integrations/supabase/api';

const Index = () => {
  const { data: posts, isLoading, isError, error } = usePosts();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <Text fontSize="xl" mb={2}>Posts</Text>
        {isLoading && <Spinner />}
        {isError && <Alert status="error"><AlertIcon />{error.message}</Alert>}
        {posts && posts.map(post => (
          <Box key={post.id} p={4} bg="white" mb={2} borderRadius="md" shadow="md">
            <Text fontSize="lg" fontWeight="bold">{post.title}</Text>
            <Text>{post.body}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;