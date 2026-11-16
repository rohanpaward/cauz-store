
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-12 md:py-36">

      <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#99968D]">
        THE STORY BEHIND CAUZ
      </p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 max-w-4xl font-sora text-4xl font-bold uppercase leading-tight tracking-[-2px] md:text-7xl"
      >
        YOU ARE MORE THAN WHAT YOU WEAR.
      </motion.h1>

      <div className="mt-12 max-w-2xl space-y-6 text-sm leading-8 text-[#77766F] md:text-base">
        <p>
          CAUZ is built around identity, passion and
          self-expression.
        </p>

        <p>
          We believe what you wear should represent
          something about who you are, what you love
          and what you stand for.
        </p>

        <p>
          Not just another outfit. A piece of your story.
        </p>
      </div>

      <div className="mt-20 border-t border-[#E5E3DC] pt-10">
        <p className="font-sora text-2xl font-bold tracking-tight md:text-4xl">
          WEAR WHAT YOU STAND FOR.
        </p>
      </div>

    </div>
  );
}

export default AboutPage;
