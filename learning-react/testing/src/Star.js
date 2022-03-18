import { FaStar } from "react-icons/fa";

export default function Start({ selected = false }) {
  return <FaStar color={selected ? "red" : "gray"} id="star" />;
}
