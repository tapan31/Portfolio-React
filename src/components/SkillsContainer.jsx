/* eslint-disable react/prop-types */

export default function SkillsContainer({ name, skills }) {
  return (
    <div>
      <h3 className="dark:text-dark-text mb-3 text-center text-xl font-medium text-text">
        {name}
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4 text-text dark:text-[#333]">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex cursor-pointer items-center justify-between space-x-2 rounded-lg bg-card p-2 text-sm font-medium shadow transition-transform duration-200 hover:scale-105 dark:bg-slate-200`}
          >
            <img
              className="h-8 w-8 object-contain"
              src={skill.img}
              alt={skill.name}
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
