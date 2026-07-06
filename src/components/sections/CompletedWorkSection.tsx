"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/motion/FadeIn";

const projects = [
  { title: "Romana Residence", tags: "Оффис · Худалдаа үйлчилгээ · Орон сууц" },
  { title: "Gegeenten Complex", tags: "Оффис · Кино театр · Хоол үйлдвэрлэл · Орон сууц" },
  { title: "GrandMed Hospital", tags: "Эмнэлгийн тусгай зориулалттай барилга" },
  { title: "Olympic Residence", tags: "99 айлын орон сууц · 4 блок" },
  { title: "SS Garden", tags: "Хурын ус ашиглалт · Нөөц цахилгаан · Пентхаус" },
  { title: "Gerlug Vista", tags: "Талст хэлбэртэй 8 блок" },
  { title: "Active Garden", tags: "Тарпец хэлбэртэй 8 блок" },
];

function ProjectItem({ project }: { project: typeof projects[number] }) {
  return (
    <div className="flex shrink-0 flex-col justify-center rounded-2xl bg-white px-8 py-5 lg:rounded-3xl lg:px-12 lg:py-7">
      <h3 className="whitespace-nowrap font-display text-lg font-semibold text-foreground lg:text-2xl">
        {project.title}
      </h3>
      <p className="mt-1 whitespace-nowrap text-sm text-muted-foreground">
        {project.tags}
      </p>
    </div>
  );
}

export function CompletedWorkSection() {
  const t = useTranslations("completedWork");
  const doubled = [...projects, ...projects];

  return (
    <section className="px-3 py-10 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-[1600px]">
        <FadeIn>
          <h2 className="mb-6 font-display text-2xl font-semibold text-foreground lg:mb-8 lg:text-4xl">
            {t("title")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-[32px] bg-secondary px-4 py-5 lg:rounded-[64px] lg:px-8 lg:py-7">
            <div className="flex animate-marquee items-center gap-4 lg:gap-6">
              {doubled.map((project, index) => (
                <ProjectItem key={`${project.title}-${index}`} project={project} />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
