"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Blog = {
  blog_title: string;
  blog_image: string;
  blog_content: string;
};

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "learn", label: "AI across the insurance consumer journey" },
  { id: "learn-phase", label: "The Learn phase" },
  { id: "buy-phase", label: "The Buy phase" },
  { id: "use-phase", label: "The Use phase" },
];

export default function BlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("introduction");

  /* ---------------- BLOG FETCH ---------------- */
  useEffect(() => {
    if (!slug) return;

    fetch(`https://api.2digitinnovations.com/v1/api/getBlogBySlug/${slug}`)
      .then((res) => res.json())
      .then((res) => setBlog(res.data))
      .catch(() => setBlog(null))
      .finally(() => setLoading(false));
  }, [slug]);

  /* ---------------- SCROLL SPY (FINAL FIX – NO NEVER ERROR) ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      let nearestSectionId = "introduction";
      let smallestDistance = Infinity;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          nearestSectionId = section.id;
        }
      }

      setActiveSection(nearestSectionId);
    };

    handleScroll(); // initial run
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- SECTION COMPONENT ---------------- */
  function Section({ id, title }: { id: string; title: string }) {
    return (
      <section id={id} className="scroll-mt-32 space-y-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, autem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          eligendi. Corrupti laudantium id pariatur libero soluta doloremque
          eaque repudiandae aliquid iusto praesentium exercitationem et nobis
          dolores reprehenderit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut animi autem est tempora expedita blanditiis repudiandae esse facere voluptatibus, quod alias vero eveniet soluta veniam dolorem aperiam et. Animi minima similique consequatur illum est earum ex rem voluptatem? Quos odio rem aut consequatur obcaecati voluptatem perferendis cumque ab veritatis temporibus voluptas consequuntur aliquid asperiores expedita amet dolorum, atque quia. Dicta voluptas doloremque nobis dolorem, molestiae commodi quod totam est sapiente, quia consequuntur rem officiis? Perferendis molestias aliquid est veniam nam. Dicta eaque sunt optio! Blanditiis, omnis laboriosam numquam ut itaque adipisci corrupti eius inventore autem quia harum enim labore iure aperiam, libero dolorem sit quam aliquam error beatae, ad delectus! Nulla, inventore assumenda, velit, iusto minima quia adipisci error eaque temporibus ullam ipsum quae dignissimos eum suscipit facere odit ab nemo consequuntur quo. Maiores, rem beatae? Vitae ducimus a officiis deleniti cum dolores beatae explicabo dignissimos perspiciatis aliquam, voluptas reiciendis et quis minus omnis voluptatem id sint laboriosam magnam quibusdam obcaecati placeat deserunt? Voluptatem, officia odit molestias esse iure alias ipsa fuga iusto quia nam quod eveniet! Voluptatem ipsa, explicabo a, aut sit dolor tempora nisi quas, accusantium quis praesentium recusandae. Eligendi commodi tempore a veritatis at accusantium ducimus dignissimos blanditiis eius reprehenderit iusto nobis quam, nemo quia unde excepturi quis ipsa pariatur perferendis mollitia maiores id quos! Recusandae perferendis sapiente quod consequuntur nesciunt quis temporibus, reiciendis error rem itaque dignissimos mollitia voluptatem eveniet, nam voluptates quae aspernatur repellendus rerum officia fuga. Eos, a nostrum. Sit quisquam suscipit itaque tenetur assumenda ut dicta at aliquid optio neque mollitia quibusdam molestias eaque cumque quas, dolor cum, rerum ratione officia nesciunt voluptates. Maxime nam excepturi, adipisci voluptatum similique voluptatem incidunt? Eius, corrupti? Et dolore vel quos suscipit cum? Deleniti non vero cupiditate tenetur, autem fugiat debitis praesentium magni modi ab doloremque distinctio nemo nostrum dolorum vitae eos, cum voluptatum, iusto aspernatur corporis at facilis voluptates consequatur? Praesentium ut enim quidem ratione debitis accusantium ea earum saepe ipsum commodi tenetur voluptates tempore dolorem distinctio atque, consequatur quaerat veniam ducimus sunt error! Placeat repellat dicta blanditiis quaerat eaque nisi error inventore rem, suscipit minima, similique repudiandae fugiat aut eius distinctio? Voluptatibus ullam, quidem, expedita sunt ab voluptas, corrupti quis minima consectetur cupiditate assumenda fugit possimus quaerat quibusdam numquam rerum non illum nemo totam! Commodi exercitationem quod ex! At quibusdam non soluta maiores ipsa nihil culpa modi dolor deserunt, repellendus quod itaque ratione perspiciatis animi omnis deleniti accusamus? Inventore tempora vitae quisquam nemo commodi accusantium dicta, reprehenderit recusandae, distinctio quia odit quas laboriosam similique earum tenetur omnis? Suscipit iste deleniti saepe, voluptates fugiat, eveniet voluptatum recusandae nulla maxime, aliquam perspiciatis asperiores facilis. Facilis veniam blanditiis quas deleniti magnam veritatis sequi cum eligendi nobis. Quis animi placeat incidunt nemo corrupti beatae libero a! Odit rerum excepturi placeat, consequatur modi ad harum cum ducimus nulla! Ipsum aliquid error earum autem eum cupiditate natus soluta in aliquam. Voluptatem qui similique in suscipit tempora quibusdam. Minus similique, odit neque atque architecto quisquam consequuntur quia, eaque facilis cum error culpa!
        </p>
      </section>
    );
  }

  /* ---------------- GUARDS ---------------- */
  if (loading) return <p className="text-center py-20">Loading…</p>;
  if (!blog) return <p className="text-center py-20">Blog not found</p>;

  /* ---------------- RENDER ---------------- */
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 grid grid-cols-1 lg:grid-cols-4 gap-10">
      {/* ================= LEFT CONTENT ================= */}
      <article className="lg:col-span-3 space-y-20">
        <h1 className="text-3xl font-bold">{blog.blog_title}</h1>

        <img
          src={blog.blog_image || "/placeholder.jpg"}
          alt={blog.blog_title}
          className="rounded-lg"
        />

        {/* CMS CONTENT */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.blog_content }}
        />

        {/* SCROLL SECTIONS */}
        <Section id="introduction" title="Introduction" />
        <Section
          id="learn"
          title="AI across the insurance consumer journey"
        />
        <Section id="learn-phase" title="The Learn phase" />
        <Section id="buy-phase" title="The Buy phase" />
        <Section id="use-phase" title="The Use phase" />
      </article>

      {/* ================= RIGHT ASIDE ================= */}
      <aside className="hidden lg:block sticky top-28 h-fit">
        <p className="font-semibold mb-4">Jump to a section</p>

        <ul className="space-y-2 border-l pl-4">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`block text-sm transition ${
                  activeSection === s.id
                    ? "text-indigo-600 font-semibold"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}
