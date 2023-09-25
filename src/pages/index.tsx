import { prose } from "styled-system/recipes";

export default function Home() {
  return (
    <article className={prose({ size: "lg" })}>
      <h1>Heading 1</h1>
      <p>Hello</p>
    </article>
  );
}
