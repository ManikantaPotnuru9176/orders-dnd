import React from "react";
import {
  Button,
  Flex,
  Heading,
  Text,
  HStack,
  Box,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const CardItem = ({ order }) => {
  const { id, img, name, status, rating, cost } = order;

  const statusColors = [
    { status: "New Order", color: "#fff0df" },
    { status: "In Progress", color: "#ced8f1" },
    { status: "Delivered", color: "#ebc9d7" },
    { status: "Completed", color: "#c8eadc" },
  ];

  return (
    <Flex
      w="300px"
      mx="auto"
      h="160px"
      shadow="xl"
      rounded="lg"
      overflow="hidden"
    >
      <Box
        w={1 / 3}
        bgSize="cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
        }}
      ></Box>

      <Box
        w={2 / 3}
        p={{
          base: 4,
          md: 2,
        }}
      >
        <Heading fontSize="xl" fontWeight="bold">
          {name}
        </Heading>
        <HStack py="2">
          <Text>Order Status: </Text>
          <Box
            bg={
              statusColors
                .filter((statusColor) => statusColor.status === status)
                .at(0).color
            }
            color="black"
            p="1px"
            borderRadius="12px"
          >
            {status}
          </Box>
        </HStack>
        <HStack spacing={1} display="flex" alignItems="center" mt={2}>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} color={rating <= i && "gray.500"} />
          ))}
        </HStack>

        <Flex mt={3} alignItems="center" justifyContent="space-between">
          <Heading color="white" fontWeight="bold" fontSize="lg">
            {cost}
          </Heading>
          {(order.status === "New Order" || order.status === "In Progress") && (
            <Button
              p={2}
              fontSize="xs"
              fontWeight="bold"
              rounded="lg"
              shadow="xl"
            >
              Cancel
            </Button>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default CardItem;
