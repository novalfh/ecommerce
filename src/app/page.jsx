import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Change something</h2>
      <Link href={'/dashboard'}>dashboard</Link>
    </div>
  );
}
