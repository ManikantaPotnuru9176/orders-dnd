import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

const CartIcon = () => {
  return (
    <Button
      position={"absolute"}
      top={{ md: "0" }}
      right={{ md: "0" }}
      m={{ base: "1rem", md: "1rem 8rem 1rem 1rem" }}
      px={{base:"2"}}
    >
      <FaShoppingCart fontSize="40px" />
    </Button>
  );
};

export default CartIcon;
