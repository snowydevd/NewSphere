import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Stay Informed with NewsNow</h1>
        <p className="text-xl mb-8">
          Get the latest news and updates from around the world, delivered to
          you in real-time.
        </p>
        <Button size="lg" variant="secondary">
          Start Reading
        </Button>
      </div>
    </div>
  );
}
