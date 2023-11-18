import Card from "./Card";

export default function WhyChooseUs() {
  return (
    <div className="flex items-center justify-between flex-col bg-background p-20 gap-10">
      <h2 className="text-white font-bold text-4xl text-center">
        Why Choose us?
      </h2>
      <div className="flex justify-center gap-4">
        <Card percentage="98%" />
        <Card percentage="100%" />
        <Card percentage="100%" />
      </div>
    </div>
  );
}
