import React from "react";

const SkillCard = ({ icon, skillName, description, progress }) => {
  return (
    <div className="bg-surface rounded-2xl border border-line p-5 hover:shadow-md transition-all duration-300 ease-in-out">
      {/* Header: Icon + Skill Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[14px] font-semibold text-ink">{skillName}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-[12px] text-ink-muted mb-3 leading-snug">
          {description}
        </p>
      )}

      {/* Progress Bar */}
      <div
        className="w-full bg-background rounded-md h-[6px] overflow-hidden"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skillName} proficiency`}
      >
        <div
          className="bg-gradient-to-r from-primary to-secondary h-full rounded-md transition-all duration-700 ease-out"
          style={{ width: `${progress ?? 0}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard