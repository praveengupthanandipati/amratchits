import React from 'react'

const Sectiontitle = ({ title, description, className, titleClass, descriptionClass }) => {
  return (
    <div className={`section-title ${className || ''}`}>
        <h2 className={`section-title-h2 ${titleClass || ''}`}>{title}</h2>
        <p className={descriptionClass || ''}>{description}</p>
    </div>
  )
}

export default Sectiontitle
