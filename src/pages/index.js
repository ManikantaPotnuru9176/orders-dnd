import ToggleColorMode from "@/components/ToggleColorMode";
import Orders from "@/components/Orders";
import CartIcon from "@/components/CartIcon";

export default function Home() {
  return (
    <>
      <CartIcon />
      <ToggleColorMode />
      <Orders />
    </>
  );
}
