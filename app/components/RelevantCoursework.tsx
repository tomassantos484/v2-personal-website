'use client';

import CourseCard from './CourseCard';

export default function RelevantCoursework() {
  return (
    <section className="mt-16">
      <div className="space-y-2 mb-12">
        <h2 className="text-yellow-300 text-4xl mb-2">4.1</h2>
        <h3 className="text-white text-4xl font-bold">Relevant Coursework.</h3>
      </div>

      {/* Graduate Coursework */}
      <div className="mb-12">
        <h4 className="text-white text-2xl mb-6">Graduate Coursework:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CourseCard
            title="Database Management Systems"
            courseCode="CUS 510"
            icon="tabler:database"
            borderColor="border-white/40"
          />
          <CourseCard
            title="Data Visualization Apps"
            courseCode="BUA 610"
            icon="carbon:chart-line"
            borderColor="border-white/40"
          />
        </div>
      </div>

      {/* Undergraduate Coursework */}
      <div>
        <h4 className="text-white text-2xl mb-6">Undergraduate Coursework:</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CourseCard
            title="Intro to Data Structures"
            courseCode="CUS 1126"
            icon="carbon:tree-view-alt"
            borderColor="border-white/30"
          />
          <CourseCard
            title="Software Design Methods"
            courseCode="CUS 1156"
            icon="mdi:design"
            borderColor="border-white/30"
          />
          <CourseCard
            title="Computer Architecture"
            courseCode="CUS 1162"
            icon="tabler:cpu"
            borderColor="border-white/30"
          />
          <CourseCard
            title="Operating Systems"
            courseCode="CUS 1163"
            icon="carbon:terminal"
            borderColor="border-white/30"
          />
          <CourseCard
            title="Software Engineering"
            courseCode="CUS 1166"
            icon="carbon:code"
            borderColor="border-white/30"
          />
          <CourseCard
            title="Data Security & Cryptography"
            courseCode="CUS 1185"
            icon="tabler:shield-lock"
            borderColor="border-white/30"
          />
          <CourseCard
            title="Intro to Networks"
            courseCode="NET 1011"
            icon="tabler:network"
            borderColor="border-white/30"
          />
          <CourseCard
            title="Numerical Analysis"
            courseCode="MTH 1015"
            icon="carbon:chart-maximum"
            borderColor="border-white/30"
          />
          <CourseCard
            title="Discrete Mathematics"
            courseCode="MTH 1022"
            icon="carbon:function-math"
            borderColor="border-white/30"
          />
        </div>
      </div>
    </section>
  );
} 