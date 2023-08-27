import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  VStack,
  HStack,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { orders } from "./ordersData";
import CardItem from "./CardItem";

const Section = ({ section }) => {
  return (
    <Box p={5} rounded="lg" shadow="2xl">
      <Flex>
        <VStack>
          <Heading fontSize="xl">{section.section}</Heading>
          <Divider m={2} />
          <VStack spacing={4}>
            {orders
              .filter((order) => order.status === section.status)
              .map((order) => (
                <CardItem order={order} />
              ))}
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Section;
