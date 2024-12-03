import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NewsCardProps {
  id: string;
  title: string;
  summary: string;
  date: string;
}

export function NewsCard({ id, title, summary, date }: NewsCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{summary}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-sm text-muted-foreground">{date}</span>
        <Button asChild>
          <Link href={`/noticias/${id}`}>Leer más</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
