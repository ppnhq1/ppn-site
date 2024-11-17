import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head"; // Import Head component
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { CallToAction2 } from "@/components/CallToAction";

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.frontmatter.description || ""} />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta
          property="og:description"
          content={post.frontmatter.description || ""}
        />
        <meta property="og:image" content={post.frontmatter.coverImage} />
      </Head>

      <PlaxLayout>
        <div className="mil-banner mil-banner-inner mil-dissolve">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8">
                <div className="mil-banner-text mil-text-center">
                  <div className="mil-text-m blog-accent mil-mb-20">Blog</div>
                  <h1 className="mil-mb-60 blog-title">
                    {post.frontmatter.title}
                  </h1>
                  <ul className="mil-breadcrumbs mil-pub-info mil-center">
                    <li>
                      <Link href="/" className="blog-accent">
                        {post.frontmatter.date}
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="blog-accent">
                        {post.frontmatter.author}
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="blog-accent">
                        {post.frontmatter.category}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner end */}
        {/* publication */}
        <div className="mil-blog-list mil-p-0-160">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="mil-pub-cover mil-mb-60 mil-up">
                  <img
                    src={post.frontmatter.coverImage}
                    alt="cover"
                    className="mil-scale-img"
                    data-value-1={1}
                    data-value-2="1.2"
                  />
                </div>
                <div className="mil-mb-15 mil-up">
                  <blockquote className="mil-text-xl mil-blog-quote mil-mb-15">
                    {post.frontmatter.quote}
                  </blockquote>
                  <p className="mil-text-m"> {post.frontmatter.quoteAuthor}</p>
                </div>
              </div>
              <div className="col-xl-9 mil-p-80-80">
                <h2 className="mil-mb-60 mil-up">
                  {post.frontmatter.subTitle}
                </h2>
                <div className="blog-content">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* publication end */}
        <CallToAction2 />
      </PlaxLayout>
    </>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content", "blog"));

  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

async function getPostBySlug(slug) {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "content", "blog", `${slug}.md`),
    "utf-8"
  );

  // Parsing frontmatter using gray-matter
  const { data: frontmatter, content } = matter(markdownWithMeta);

  // Return frontmatter and content (no HTML conversion needed)
  return {
    frontmatter,
    content, // Passing raw markdown content to be used with ReactMarkdown
  };
}
