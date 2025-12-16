import { motion } from "framer-motion";

export default function Timeline({ items }) {
  return (
    <div className="relative mx-auto w-[90%] pl-8 pr-2 py-4 text-left backdrop-blur-md bg-neutral-900/60 flex rounded-lg">
      {/* vertical line */}
      <div className="absolute left-3 top-0 h-full w-px bg-gray-300 text-lg" />

      <ul className="space-y-8">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative"
          >
            {/* bullet */}
            <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full bg-gray-300" />

            <div className="flex flex-col">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-semibold text-white">{item.job}</h3>
                <span className="text-sm text-gray-300">{item.date}</span>
              </div>
              <p className="mt-1 text-sm text-gray-300">{item.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/*
USAGE:

const timelineItems = [
  {
    job: "Backend Engineer",
    date: "2023 – Present",
    description: "Designed APIs, Dockerized services, and CI pipelines."
  },
  {
    job: "Junior Developer",
    date: "2021 – 2023",
    description: "Worked on frontend features and internal tools."
  }
];

<Timeline items={timelineItems} />
*/
