import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const LOGOS_PER_PAGE = 12;
const Tech = () => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(technologies.length / LOGOS_PER_PAGE);
  const startIdx = page * LOGOS_PER_PAGE;
  const endIdx = startIdx + LOGOS_PER_PAGE;
  const visibleTechnologies = technologies.slice(startIdx, endIdx);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className={`${styles.sectionHeadText} text-center`}>
          Skills.
        </h3>
      </motion.div>

      <div className="hidden sm:flex">
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {visibleTechnologies.map((technology, index) => (
            <div className="w-28 h-28" key={`${technology.name}-${startIdx}-${index}`}> 
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "24px", gap: "8px" }}>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 0}
            style={{ padding: "8px 16px", borderRadius: "4px", background: "#222", color: "#fff", border: "none", cursor: page === 0 ? "not-allowed" : "pointer" }}
          >
            Prev
          </button>
          <span style={{ color: "#fff", fontWeight: "bold" }}>Page {page + 1} / {totalPages}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages - 1}
            style={{ padding: "8px 16px", borderRadius: "4px", background: "#222", color: "#fff", border: "none", cursor: page === totalPages - 1 ? "not-allowed" : "pointer" }}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "skills");
