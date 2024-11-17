import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PageBanner } from "@/components/Banner";
import PlaxLayout from "@/layouts/PlaxLayout";
import BlogList from "@/components/BlogList";

// Function to read all posts from the content directory
const getPosts = () => {
  const files = fs.readdirSync(path.join(process.cwd(), "content", "blog"));
  return files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "content", "blog", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    const slug = filename.replace(".md", "");

    return {
      slug,
      ...frontmatter,
    };
  });
};

// Blog page component that lists all posts
const BlogPage = () => {
  const posts = getPosts();

  return (
    <PlaxLayout>
      <PageBanner
        pageName="Blog"
        title="Your Source of Financial Information"
      />
      <BlogList posts={posts} />
    </PlaxLayout>
  );
};

export default BlogPage;
