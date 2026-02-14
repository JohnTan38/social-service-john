"use client";
// @flow strict

import Link from "next/link";
import { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHandsHelping, FaRegClipboard } from "react-icons/fa";
import { MdOutlineGroups2, MdOutlineVolunteerActivism } from "react-icons/md";

const roleHighlights = [
  {
    id: "engagement",
    title: "Youth Engagement and Relational Connection",
    icon: <FaHandsHelping size={22} />,
    points: [
      "Build trusting and supportive relationships with youths through consistent presence.",
      "Use strengths-based approaches to understand youth interests, challenges, and motivations.",
      "Create safe spaces where youths feel heard, respected, and empowered.",
    ],
  },
  {
    id: "delivery",
    title: "Programme and Community Delivery",
    icon: <MdOutlineVolunteerActivism size={22} />,
    points: [
      "Design and deliver youth-focused programmes using arts, sports, and experiential learning.",
      "Support logistics, administration, and needs assessment to keep programmes relevant.",
      "Implement estate outreach initiatives and build relationships with schools and partners.",
    ],
  },
  {
    id: "operations",
    title: "Volunteer, Monitoring and Operations",
    icon: <FaRegClipboard size={22} />,
    points: [
      "Support volunteer screening, orientation, and capability development.",
      "Collect data and feedback, and complete timely documentation and progress reports.",
      "Uphold safety protocols and support ad-hoc community projects as assigned.",
    ],
  },
];

function CareCommunityProfile() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeRole = useMemo(() => roleHighlights[activeIndex], [activeIndex]);

  const onPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + roleHighlights.length) % roleHighlights.length);
  };

  const onNext = () => {
    setActiveIndex((prev) => (prev + 1) % roleHighlights.length);
  };

  return (
    <section id="care-community" className="relative my-12 border-t border-[#25213b] pt-10 text-theme-primary lg:my-20">
      <div className="pointer-events-none absolute left-1/3 top-12 h-24 w-24 rounded-full bg-violet-200/20 blur-3xl" />

      <div className="flex justify-center">
        <div className="flex items-center">
          <span className="h-[2px] w-16 bg-[#1a1443]" />
          <span className="mx-3 rounded-md bg-[#1a1443] px-4 py-2 text-lg text-white lg:px-5 lg:text-xl">
            Social Service
          </span>
          <span className="h-[2px] w-16 bg-[#1a1443]" />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="rounded-xl border border-[#353a52] bg-theme-surface p-5 lg:p-7">
          <p className="text-xs uppercase tracking-[0.2em] text-theme-accent">Target Role</p>
          <h2 className="mt-3 text-2xl font-bold lg:text-3xl">
            Youth Empowerment Specialist (Community Care Executive Track)
          </h2>
          <p className="mt-4 text-sm text-theme-muted lg:text-base">
            This add-on profile reframes John&apos;s strengths toward direct youth engagement,
            programme facilitation, community outreach, and volunteer enablement in social service.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-[#353a52] p-3">
              <p className="flex items-center gap-2 text-theme-accent">
                <MdOutlineGroups2 size={20} />
                Youth Engagement
              </p>
            </div>
            <div className="rounded-lg border border-[#353a52] p-3">
              <p className="flex items-center gap-2 text-theme-accent">
                <FaHandsHelping size={18} />
                Groupwork Facilitation
              </p>
            </div>
            <div className="rounded-lg border border-[#353a52] p-3">
              <p className="flex items-center gap-2 text-theme-accent">
                <MdOutlineVolunteerActivism size={20} />
                Outreach and Partnerships
              </p>
            </div>
            <div className="rounded-lg border border-[#353a52] p-3">
              <p className="flex items-center gap-2 text-theme-accent">
                <FaRegClipboard size={18} />
                Monitoring and Reporting
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="https://www.mycareersfuture.gov.sg/job/social-services/executive-care-community-services-society-44aab998862eb385a3a11dbc7d828a79?source=MCF&event=RecommendedJobJD"
              target="_blank"
              className="rounded-full border border-theme-muted px-4 py-2 text-xs font-semibold uppercase tracking-wide transition hover:border-[#16f2b3] hover:text-theme-accent"
            >
              View Job Posting
            </Link>
            <Link
              href="https://developer-portfolio-john.vercel.app"
              target="_blank"
              className="rounded-full border border-theme-muted px-4 py-2 text-xs font-semibold uppercase tracking-wide transition hover:border-[#16f2b3] hover:text-theme-accent"
            >
              View Public Portfolio
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-[#353a52] bg-theme-surface p-5 lg:p-7">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-theme-accent">
              Responsibilities Snapshot
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onPrevious}
                className="rounded-full border border-theme-muted p-2 transition hover:border-[#16f2b3] hover:text-theme-accent"
                aria-label="Previous responsibility group"
              >
                <FaChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="rounded-full border border-theme-muted p-2 transition hover:border-[#16f2b3] hover:text-theme-accent"
                aria-label="Next responsibility group"
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-[#353a52] p-4">
            <div className="flex items-center gap-3 text-theme-accent">
              {activeRole.icon}
              <h3 className="text-lg font-semibold">{activeRole.title}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-theme-muted lg:text-base">
              {activeRole.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {roleHighlights.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wide transition ${
                  activeIndex === index
                    ? "border-[#16f2b3] text-theme-accent"
                    : "border-theme-muted text-theme-muted hover:border-[#16f2b3] hover:text-theme-accent"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareCommunityProfile;
