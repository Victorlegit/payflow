import { useParams, Link } from "react-router-dom";
import { SectionWrapper } from "../components/SectionWrapper";
import { SEO } from "../components/SEO";
import { blogPosts } from "../data/content";
import { CtaSection } from "../components/CtaSection";
import { ArrowLeft } from "lucide-react";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-white pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-500 font-semibold">
            &larr; Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-24">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
      />
      <SectionWrapper className="bg-white">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to blog
            </Link>
          </div>
          <p className="text-base font-semibold leading-7 text-indigo-600">{post.date}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-x-4">
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                By {post.author}
              </p>
            </div>
          </div>
          <figure className="mt-10">
            <img
              className="aspect-video rounded-xl bg-gray-50 object-cover w-full"
              src={post.imageUrl}
              alt={post.title}
              referrerPolicy="no-referrer"
            />
          </figure>
          <div className="mt-10 max-w-2xl">
            <p className="text-lg leading-8 text-gray-600">
              {post.content}
            </p>
            <div className="mt-8 text-gray-600 space-y-6">
              <p>
                This is a mocked blog post detail page. In a real application, this content would be fetched from a CMS like Sanity, Contentful, or Strapi, and rendered using a rich text component or markdown parser.
              </p>
              <p>
                The current implementation uses static data from our content file to demonstrate the routing and layout structure of the blog feature.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <CtaSection />
    </div>
  );
}
