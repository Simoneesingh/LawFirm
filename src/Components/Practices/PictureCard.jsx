export default function PictureCard({ image, title, span }) {
  return (
    <div className={`relative rounded-lg flex ${span ? "col-span-2" : ""}`}>
      <img src={image} alt={title} />
      <div className="flex items-center justify-center absolute bottom-0 w-full p-2 text-b1 font-semibold">
        {title}
      </div>
    </div>
  );
}
