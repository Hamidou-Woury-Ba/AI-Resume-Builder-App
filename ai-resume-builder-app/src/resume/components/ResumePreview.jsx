import { ResumeInfoContext } from '@/context/ResumeInfo'
import React, { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview'
import SummaryPreview from './preview/SummeryPreview'
import ProfessionalExperiencePreview from './preview/ExperiencePreview'
import EducationalPreview from './preview/EducationalPreview'
import SkillsPreview from './preview/SkillsPreview'

function ResumePreview() {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext) // Récupérer les informations du CV en cours de création ou d'édition 

    return (
        <div className='shadow-lg p-14 h-full border-t-[20px]' style={{
            borderColor: resumeInfo?.themeColor,
        }}
        >
            {/* Personnal detail */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />

            {/* Summary */}
            <SummaryPreview resumeInfo={resumeInfo} />

            {/* Professional Experience */}
            <ProfessionalExperiencePreview resumeInfo={resumeInfo} />

            {/* Educational */}
            <EducationalPreview resumeInfo={resumeInfo} />

            {/* Details */}
            <SkillsPreview resumeInfo={resumeInfo} />
        </div>
    )
}

export default ResumePreview
