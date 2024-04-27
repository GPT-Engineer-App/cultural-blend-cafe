import { Box, Flex, Heading, Text, Image, Button, Stack, Link, SimpleGrid, FormControl, FormLabel, Input, Textarea, IconButton, useBreakpointValue, Container, VStack, HStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBars } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" p="4" bg="orange.200" align="center" justify="space-between" wrap="wrap">
        <IconButton aria-label="Open Menu" icon={<FaBars />} display={{ md: "none" }} />
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Mim’s Café
        </Heading>
        <Stack direction={{ base: "column", md: "row" }} display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
          <Link href="#home">Home</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#coffee-shop">Coffee Shop</Link>
          <Link href="#catering">Catering</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#faq">FAQ</Link>
        </Stack>
      </Flex>

      {/* Hero Section */}
      <Flex align="center" justify="center" bg="yellow.100" p={10}>
        <VStack spacing={2}>
          <Heading as="h2" size="xl">
            Welcome to Mim’s Café
          </Heading>
          <Text fontSize="lg">Where Middle Eastern hospitality meets American dynamism in the heart of Minnesota.</Text>
          <Button colorScheme="orange" mt={4}>
            Explore Menu
          </Button>
        </VStack>
      </Flex>

      {/* About Us */}
      <Container maxW="container.lg" p={5}>
        <Heading as="h3" size="lg">
          About Us
        </Heading>
        <Text mt={2}>Mim’s Café began as a pioneer among Palestinian restaurants in Minnesota in the late 1990s. We opened our doors with a vision to share more than just food but to offer a window into the rich tapestry of our culture. Today, Mim's Cafe stands as a testament to the power of sharing meals, stories, and traditions from across the world, inviting everyone to indulge in a truly unique dining experience.</Text>
        <Image src="https://images.unsplash.com/photo-1506377295352-e3154d43ea9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxNaW0lRTIlODAlOTlzJTIwQ2FmJUMzJUE5JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzE0MjQyNTk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Mim’s Café Interior" mt={4} />
      </Container>

      {/* Menu Section */}
      <Box id="menu" bg="gray.50" p={5}>
        <Heading as="h3" size="lg" textAlign="center">
          Menu Highlights
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={6}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1530469912745-a215c6b256ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxTaGF3YXJtYXxlbnwwfHx8fDE3MTQyNDI1OTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Shawarma" />
            <Text mt={2}>Shawarma - Chicken or beef slowly roasted and thinly sliced.</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1547058881-aa0edd92aab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxGYWxhZmVsfGVufDB8fHx8MTcxNDI0MjU5NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Falafel" />
            <Text mt={2}>Falafel - Chickpeas, garlic, onions, cilantro, and parsley.</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1600473763749-5e4212ea0e69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxLdWZ0YSUyMEthYm9ifGVufDB8fHx8MTcxNDI0MjU5NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Kufta Kabob" />
            <Text mt={2}>Kufta Kabob - Ground meat with cilantro, parsley, onion.</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Contact Section */}
      <Box bg="orange.100" p={5}>
        <Heading as="h3" size="lg" textAlign="center">
          Contact Us
        </Heading>
        <VStack spacing={3} mt={4}>
          <HStack spacing={3}>
            <FaMapMarkerAlt />
            <Text>1435 Cleveland Ave, Saint Paul, MN 55108</Text>
          </HStack>
          <HStack spacing={3}>
            <FaPhone />
            <Text>(651) 646-0456</Text>
          </HStack>
          <HStack spacing={3}>
            <FaEnvelope />
            <Text>support@mims-cafe.com</Text>
          </HStack>
        </VStack>
      </Box>

      {/* Footer */}
      <Flex as="footer" p="4" bg="gray.800" color="white" align="center" justify="center">
        <Text>&copy; {new Date().getFullYear()} Mim's Café. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;
