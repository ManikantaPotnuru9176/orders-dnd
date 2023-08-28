import React from "react";
import {
  Box,
  Flex,
  Heading,
  VStack,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDrop } from "react-dnd";
import CardItem from "./CardItem";

const Section = ({ section, orders, setOrders }) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: "CARD",
    drop: (item) => {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === item.id ? { ...order, status: section.status } : order
        )
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <Box
      p={5}
      minW={"320px"}
      rounded="lg"
      shadow="2xl"
      ref={dropRef}
      borderColor={isOver ? "gray" : ""}
      borderWidth={isOver ? "2px" : "0px"}
    >
      <Flex justify={"center"}>
        <VStack>
          <Heading fontSize="xl">{section.section}</Heading>
          <Divider m={2} minW={"300px"} />
          <VStack spacing={4}>
            {orders.map((order, index) => (
              <CardItem key={index} order={order} />
            ))}
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Section;
