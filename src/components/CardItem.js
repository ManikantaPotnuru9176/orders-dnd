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
  Stack,
} from "@chakra-ui/react";
import { StarIcon, CloseIcon } from "@chakra-ui/icons";

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
      h={{ base: "110px", md: "100px" }}
      shadow="xl"
      rounded="lg"
      overflow="hidden"
      position="relative"
    >
      <Flex position="absolute" top="0" right="0" p="2">
        {(order.status === "New Order" || order.status === "In Progress") && (
          <CloseIcon cursor={"pointer"} />
        )}
      </Flex>
      <Box
        w={1 / 3}
        bgSize="cover"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></Box>

      <Box
        w={2 / 3}
        p={{
          base: 4,
          md: 2,
        }}
      >
        <Stack direction={"row"}>
          <Heading fontWeight="bold" fontSize="lg">
            {name + " - "}
          </Heading>
          <Heading fontWeight="bold" fontSize="lg">
            {cost}
          </Heading>
        </Stack>
        <HStack py="2">
          <Box
            bg={
              statusColors
                .filter((statusColor) => statusColor.status === status)
                .at(0).color
            }
            color="black"
            p="1px"
            borderRadius="12px"
            fontSize={"12px"}
          >
            {status}
          </Box>
        </HStack>
        <HStack spacing={1} display="flex" alignItems="center" mt={2}>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} color={rating <= i && "gray.500"} />
          ))}
        </HStack>
      </Box>
    </Flex>
  );
};

export default CardItem;
