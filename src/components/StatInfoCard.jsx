import React from "react"

const StatInfoCard = ({count, lable}) => {
    return (
  <div className="flex-1 flex items-start gap-3 md:gap-5 bg-surface rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 border border-line">
    <h4 className="text-4xl md:text-5xl font-semibold text-primary">{count}</h4>
    <p className="text-sm md:text-base font-normal text-ink/80 leading-6 whitespace-pre-line">{lable}
    </p>
  </div>
  )
}

export default StatInfoCard