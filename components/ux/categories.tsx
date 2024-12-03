import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  { name: "Politics", icon: "🏛️" },
  { name: "Technology", icon: "💻" },
  { name: "Science", icon: "🔬" },
  { name: "Health", icon: "🏥" },
  { name: "Environment", icon: "🌍" },
  { name: "Sports", icon: "⚽" },
];

export function Categories() {
  return (
    <section id="categories" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">News Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              asChild
              className="h-24"
            >
              <Link
                href={`/category/${category.name.toLowerCase()}`}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-2xl mb-2">{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
