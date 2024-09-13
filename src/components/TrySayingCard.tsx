import { Card, CardContent } from "./ui/card";

interface TrySayingCardProps {
  title: string;
  items: string[];
}

export const TrySayingCard: React.FC<TrySayingCardProps> = ({ title, items }) => (
  <Card className="bg-gray-800">
    <CardContent className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="list-disc list-inside text-sm text-gray-300">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
