import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl">HomePage</h1>
      <Link href="/about" className="text-2xl text-purple-600">
        about page
      </Link>
    </div>
  );
};
export default HomePage;