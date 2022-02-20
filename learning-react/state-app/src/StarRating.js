import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5 }) {
  const Star = ({ selected = false }) => (
    <FaStar color={selected ? "red" : "grey"} />
  );

  return [...Array(totalStars)].map((_, i) => <Star key={i} />);
}
