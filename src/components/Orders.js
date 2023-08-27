import React from "react";
import { Flex, Stack, Heading } from "@chakra-ui/react";
import Section from "./Section";

const Orders = () => {
  const sections = [
    { section: "NEW ORDERS", status: "New Order" },
    { section: "IN PROGRESS", status: "In Progress" },
    { section: "WAITING FOR BUYER", status: "Delivered" },
    { section: "COMPLETED", status: "Completed" },
  ];

  return (
    <Stack>
      <Heading textAlign="center" pt={5}>
        Orders DND
      </Heading>
      <Stack direction="row" pt={"40px"} justify="center" spacing={4}>
        {sections.map((section) => (
          <Section section={section} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Orders;
