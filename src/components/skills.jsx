"use client";

const skills = [
  "React.js",
  "Tailwind CSS",
  "NextJs",
  "Redux",
  "Node.js/Express.js",
  "MongoDb/mongoose",
  "SQL (MySQL)",
  "Prisma ORM",
  "Python",
  "JavaScript",
  "TypeScript",
  "C++",
  "GraphQL",
  "Basic React-Native",
  "Java",
  "HTML",
  "CSS",
  "Docker",
  "Git/Github",
  "Postman"
]

function Skills() {
  return (
    <section id='skills' className='w-full py-4 font-[family-name:var(--font-ubuntu-sans)] mb-14'>
        <div>
            <h2 className='text-4xl font-bold'>Skills</h2>
            <span className='my-1 text-lg font-semibold text-(--blue-color)'>My toolbox</span>
        </div>
        <div className="mt-10">
          <div className="flex gap-3 flex-wrap">
            {
              skills.map((skill) => (
                <div key={skill} className="h-[3rem] px-8 bg-[#6E6E6E]/30 flex items-center rounded-md">
                  <span className="text-lg text-white font-semibold">{skill}</span>
                </div>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Skills