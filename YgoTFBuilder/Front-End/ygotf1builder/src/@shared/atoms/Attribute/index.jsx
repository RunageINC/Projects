import { attributes } from "./attributes";

export const Attribute = ({ attribute }) => (
  <img src={attributes[attribute].image} alt="" width={35} height={35} />
);
