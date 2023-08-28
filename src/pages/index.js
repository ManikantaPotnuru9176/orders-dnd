import ToggleColorMode from "@/components/ToggleColorMode";
import Orders from "@/components/Orders";
import CartIcon from "@/components/CartIcon";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";

export default function Home() {
  return (
    <>
      <CartIcon />
      <ToggleColorMode />
      <DndProvider options={HTML5toTouch}>
        <Orders />
      </DndProvider>
    </>
  );
}
