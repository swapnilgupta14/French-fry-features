import Homepage from "./homepage";
import UseLenis from "../utils/customHooks/UseLenis";

export default function Home() {
  UseLenis();
  return (
    <Homepage/>
  )
}