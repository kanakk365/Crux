"use client";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  ...props
}) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState([]);

  function getPos() {
    const xPos = Math.floor((Math.random() * dimensions.width) / width);
    const yPos = Math.floor((Math.random() * dimensions.height) / height);
    return [xPos, yPos];
  }

  // Generate squares to fill the area based on container size
  function generateSquares(count) {
    const maxRows = Math.floor(dimensions.height / height);
    const maxCols = Math.floor(dimensions.width / width);

    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: [
        Math.floor(Math.random() * maxCols),
        Math.floor(Math.random() * maxRows),
      ],
    }));
  }

  // Set squares when dimensions change
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares]);

  // Resize observer to update container dimensions
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...props}
    >
      {/* Radial gradient mask for fading effect */}
      <defs>
        <mask id="fadeMask">
          <radialGradient id="grad1" cx="50%" cy="30%" r="40%">
            <stop offset="20%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <rect width="100%" height="100%" fill="url(#grad1)" />
        </mask>

        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>

      {/* Apply mask to the grid */}
      <rect
        width="100%"
        height="100%"
        fill={`url(#${id})`}
        mask="url(#fadeMask)"
      />

      <svg x={x} y={y} className="overflow-visible"></svg>
    </svg>
  );
}

export default GridPattern;
