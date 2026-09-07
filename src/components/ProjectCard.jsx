import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const { title, description, image, tags, demoUrl, repoUrl } = project;

    return (
        <div className="bg-surface rounded-2xl border border-line overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out h-full flex flex-col">
            <div className="w-full aspect-video bg-background overflow-hidden">
                <img
                    src={image}
                    alt={`${title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-ink">{title}</h3>
                {description && (
                    <p className="text-sm text-ink-muted mt-2 leading-snug">{description}</p>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[11px] font-medium px-3 py-1 rounded-full bg-background text-secondary border border-line"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {(demoUrl || repoUrl) && (
                    <div className="flex items-center gap-4 mt-5 pt-4 border-t border-line text-sm font-medium">
                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-primary hover:text-secondary transition-colors duration-200"
                            >
                                <FaExternalLinkAlt className="w-3 h-3" /> Live Demo
                            </a>
                        )}
                        {repoUrl && (
                            <a
                                href={repoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-ink-muted hover:text-ink transition-colors duration-200"
                            >
                                <FaGithub className="w-3.5 h-3.5" /> Source
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
