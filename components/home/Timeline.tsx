"use client";
import TimelineItem from "./TimelineItem";

type EventType = {
  id: string;
  year: string;
  title: string;
  highlight?: boolean;
};

const Events: EventType[] = [
  { id: "0", year: "2026", title: "TBA ", highlight: true },
  { id: "1", year: "2025", title: "Luminescense "},
  { id: "2", year: "2024", title: "Urban Maze" },
  { id: "3", year: "2023", title: "IdeasWorthSpreading"},
  { id: "4", year: "2022", title: "Reconcile" },
  { id: "5", year: "2021", title: "Incentive"},
  { id: "6", year: "2020", title: "Δεν το βρισκω",},
  { id: "7", year: "2019", title: "Connect the Pieces",},
  { id: "8", year: "2018", title: "Elephant in The Room",},
  { id: "9", year: "2017", title: "Break The Pattern", },
  { id: "10", year: "2016", title: "Frameworks ", },
];

export default function Timeline({ events = Events }: { events?: EventType[] }) {
  return (
    
    <section className="relative max-w-7xl mx-auto px-6 py-16 text-5xl md:text-7xl font-bold">
      Our History
      {/* Grid: 9 columns on md+, single column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-9 gap-y-15 items-start">
        {/* Center vertical line column: occupies column 5 on md */}
        {/* We create an empty column for col 5 on md to hold the line and markers */}
        {/* Items will occupy col 1-4 or col 6-9 */}
        {events.map((ev, idx) => {
          const side = idx % 2 === 0 ? "right" : "left"; // alternate starting with right for screenshot parity
          return (
            <div key={ev.id} className="md:contents">
              {/* TimelineItem will place itself inside col spans using its classes */}
              <TimelineItem event={ev} side={side} />

              {/* Center marker & connector — on md screens only */}
              <div className="hidden md:flex col-span-1 md:col-start-5 md:col-end-6 items-center justify-center">
                <div className="relative flex flex-col items-center">
                  {/* dashed vertical line goes full height of container via absolute element on parent section */}
                  <span className="block bg-transparent w-px h-full relative">
                    {/* marker */}
                    <span className="absolute -translate-y-1/2 top-1/2 transform">
                      <span className="block w-3 h-3 rounded-full bg-red-500 ring-2 ring-black" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Vertical dashed line overlay (md and up) */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-28 bottom-16 pointer-events-none">
        <div className="h-full border-l-2 border-dashed border-gray-700" />
      </div>
    </section>
  );
}
