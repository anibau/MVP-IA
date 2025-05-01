
import { Star } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  avatarUrl: string;
  rating: number;
}

const TestimonialCard = ({
  content,
  author,
  role,
  avatarUrl,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="glass-card h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img
              src={avatarUrl}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-medium text-base">{author}</h4>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-amber-500 fill-amber-500" : "text-muted"}
            />
          ))}
        </div>
      </div>
      <blockquote className="text-sm text-muted-foreground mt-auto">
        "{content}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
