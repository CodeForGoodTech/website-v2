import BlogSidebar from "./BlogSidebar";

export default function BlogLayout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
        <main>{children}</main>
        <BlogSidebar />
      </div>
    </div>
  );
}