import {
  LearnAuthorSection,
  LearnBreadcrumb,
  LearnCurriculumSection,
  LearnDivider,
  LearnHeroSection,
  LearnRecommendationStripsSection,
  LearnReviewsSection,
  LearnSneakPeekSection,
  LearnStickySidebarCard,
  LearnTopNav
} from "@/features/learn";

export default function LearnTrackPage() {
  return (
    <main className="bg-[#040d16] text-[#f0f5fa]">
      <LearnTopNav />
      <LearnBreadcrumb />

      <div className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-12">
        <section className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-start lg:gap-10 lg:py-10">
          <div className="min-w-0">
            <LearnHeroSection />
            <LearnDivider />
            <LearnCurriculumSection />
            <LearnDivider />
            <LearnSneakPeekSection />
            <LearnDivider />
            <LearnAuthorSection />
            <LearnDivider />
            <LearnReviewsSection />
            <LearnDivider />
            <LearnRecommendationStripsSection />
          </div>

          <LearnStickySidebarCard />
        </section>
      </div>
    </main>
  );
}
