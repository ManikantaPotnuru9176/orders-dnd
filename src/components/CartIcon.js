import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Box } from "@chakra-ui/react";

const CartIcon = () => {
  return (
    <Box position={"absolute"} top={"0"} right={"0"} m="1rem 8rem 1rem 1rem">
      <FaShoppingCart fontSize="40px" />
    </Box>
  );
};

export default CartIcon;
