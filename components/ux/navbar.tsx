import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            NewSphere
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#latest"
                className="text-gray-600 hover:text-blue-600"
              >
                Latest
              </Link>
            </li>
            <li>
              <Link
                href="#categories"
                className="text-gray-600 hover:text-blue-600"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href="#subscribe"
                className="text-gray-600 hover:text-blue-600"
              >
                Subscribe
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
