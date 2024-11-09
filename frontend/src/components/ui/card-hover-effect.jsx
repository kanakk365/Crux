import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Badge } from "./badge";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8",
        className
      )}
    >
      {items?.slice(0,6).map((item, idx) => (
        <Link
          to={item?.link} 
          key={item._id} 
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardCompanyName>{item.company.name}</CardCompanyName>
            <CardLoc>{item.location}</CardLoc>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="flex gap-4 mt-3">
              <Badge className={"w"}>{item.position} Positions</Badge>
              <Badge>{item.jobType}</Badge>
              <Badge>{item.salary}</Badge>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-2 overflow-hidden bg-[#011627] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-2 text-lg",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardLoc = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-0 text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardCompanyName = ({ className, children }) => {
  return (
    <h5
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-0 text-base",
        className
      )}
    >
      {children}
    </h5>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
