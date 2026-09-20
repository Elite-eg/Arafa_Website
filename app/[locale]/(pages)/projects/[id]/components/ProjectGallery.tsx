"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import {
  HiOutlineEye,
  HiX,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import type { Project } from "@/app/[locale]/(pages)/projects/data/constants";

interface ProjectGalleryProps {
  project: Project;
  titleLabel?: string;
  badgeLabel?: string;
}

export default function ProjectGallery({
  project,
  titleLabel = "Project Visual Showcase",
  badgeLabel = "Gallery",
}: ProjectGalleryProps) {
  const images =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="section-padding bg-body-alt/30 pt-8 md:pt-12">
      <div className="container-custom">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-8 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-secondary/10 text-secondary-dark border border-secondary/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            {badgeLabel}
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
            {titleLabel}
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              onClick={() => setActiveIdx(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card cursor-pointer border border-edge/60"
            >
              <Image
                src={img}
                alt={`${project.title} gallery image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/30 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <HiOutlineEye className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modern Modal Lightbox */}
        <AnimatePresence>
          {activeIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIdx(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-between p-4 md:p-8 overflow-hidden select-none"
            >
              {/* Top Header Bar */}
              <div className="w-full max-w-5xl flex items-center justify-between z-10 py-2">
                <div>
                  <h4 className="text-white font-heading font-semibold text-lg sm:text-xl">
                    {project.title}
                  </h4>
                  <p className="text-white/60 text-xs sm:text-sm">
                    Photo {activeIdx + 1} of {images.length}
                  </p>
                </div>

                <button
                  onClick={() => setActiveIdx(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-colors"
                  aria-label="Close modal"
                >
                  <HiX className="w-5 h-5" />
                </button>
              </div>

              {/* Center Image Container */}
              <div
                className="relative w-full max-w-5xl flex-1 my-4 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Prev Button */}
                {images.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx((prev) =>
                        prev !== null
                          ? prev === 0
                            ? images.length - 1
                            : prev - 1
                          : null,
                      );
                    }}
                    className="absolute start-2 sm:start-4 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all hover:scale-110 active:scale-95"
                    aria-label="Previous image"
                  >
                    <HiChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {/* Main Image */}
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full h-full max-h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/30 flex items-center justify-center"
                >
                  <Image
                    src={images[activeIdx]}
                    alt={`${project.title} photo ${activeIdx + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </motion.div>

                {/* Next Button */}
                {images.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIdx((prev) =>
                        prev !== null
                          ? prev === images.length - 1
                            ? 0
                            : prev + 1
                          : null,
                      );
                    }}
                    className="absolute end-2 sm:end-4 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-all hover:scale-110 active:scale-95"
                    aria-label="Next image"
                  >
                    <HiChevronRight className="w-6 h-6" />
                  </button>
                )}
              </div>

              {/* Bottom Thumbnail Selector Bar */}
              {images.length > 1 && (
                <div
                  className="z-10 flex items-center justify-center gap-3 overflow-x-auto py-2 px-4 max-w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIdx(idx)}
                      className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all ${
                        idx === activeIdx
                          ? "border-accent scale-105 shadow-lg"
                          : "border-white/20 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="100px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
