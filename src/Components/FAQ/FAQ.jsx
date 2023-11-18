import FaqAccordion from "./Accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col justify-around bg-background px-52 py-20 gap-10 max-h-[629px] ">
      <h2 className="text-white font-medium text-4xl items-start">FAQ</h2>
      <div className="flex flex-1 gap-56">
        <p className="text-white/30 max-w-[600px] leading-snug">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          amet sint.
        </p>
        <div className="flex flex-col justify-center gap-4  max-w-[700px]">
          <h4 className="text-white font-medium px-4">
            Do I need a personal injury report?
          </h4>
          <p className="text-white/30 px-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </p>
          <FaqAccordion
            title="How much is my case worth?"
            summary="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          />
          <FaqAccordion
            title="What should I do right after car accidect"
            summary="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          />
          <FaqAccordion
            title="How much is my case worth?"
            summary="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          />
        </div>
      </div>
    </div>
  );
}
