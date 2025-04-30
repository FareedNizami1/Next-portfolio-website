import { motion } from 'framer-motion';
import Image from 'next/image';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const SectionCard = ({ title, institution, year, country, logo }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-[rgba(15,32,42,0.6)]  border border-cyan-500 rounded-xl p-5 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all duration-300 backdrop-blur-md"
  >
    <div className="flex flex-col sm:flex-row gap-5 items-start">
      <div className="relative w-16 h-16 bg-white rounded p-1">
        <Image
          src={logo}
          alt={institution}
          fill
          className="object-contain rounded"
        />
      </div>
      <div>
        <h3 className="text-cyan-400 text-lg font-bold">{title}</h3>
        <p className="text-slate-300 text-sm">{institution}</p>
        <div className="text-xs text-slate-400 mt-1 flex flex-wrap gap-2 items-center">
          <span>{year}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Image
              src="/logo/flag.jpg"
              alt={country}
              width={20}
              height={12}
              className="object-contain"
            />
            <span className="text-cyan-300">{country}</span>
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);
