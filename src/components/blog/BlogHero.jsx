import { Heart } from "lucide-react";

export default function BlogHero({
  title,
  image,
  author,
  category,
  comments = 0,
  likes = 0,
}) {
  return (
    <section className="relative h-[500px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-20">
        <div className="text-white w-full">
          <h1 className="text-5xl font-bold mb-6">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm uppercase">
            <span>{category}</span>

            <span>•</span>

            <span>By {author}</span>

            <span>•</span>

            <span>{comments} Comments</span>

            <div className="ml-auto flex items-center gap-2">
              <Heart size={18} />
              <span>{likes} Likes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}