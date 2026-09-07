import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { motion, useReducedMotion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { PROJECTS } from "../utils/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    const updateButtonStates = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollNext(emblaApi.canScrollNext());
        setCanScrollPrev(emblaApi.canScrollPrev());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        updateButtonStates();
        emblaApi.on('select', updateButtonStates);
        emblaApi.on('reInit', updateButtonStates);
    }, [emblaApi, updateButtonStates]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <section id="projects" className="container mx-auto px-8 py-16">
            <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
                <motion.div
                    className="flex-1"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    <h4 className="lg:block w-[200px] section-title text-left lg:text-left m-2">Projects</h4>
                    <p className="text-sm md:text-base text-justify leading-6 mt-4 text-ink-muted whitespace-pre-line">
                        A selection of things I&rsquo;ve built and shipped — from a live data-tool
                        portfolio to full-stack e-commerce platforms.
                    </p>

                    <div className="flex justify-center lg:justify-start gap-3 mt-8">
                        <button
                            type="button"
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            aria-label="Previous project"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
                        >
                            <IoIosArrowBack />
                        </button>
                        <button
                            type="button"
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            aria-label="Next project"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/40 text-primary hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    className="relative w-full lg:w-[60%]"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex pt-4 pb-8">
                            {PROJECTS.map((project) => (
                                <div key={project.id} className="min-w-[100%] sm:min-w-[70%] lg:min-w-[50%] pr-4">
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
