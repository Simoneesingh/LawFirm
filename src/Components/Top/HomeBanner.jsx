import EnterEmail from "./EnterEmail";

export default function HomeBanner() {
  return (
    <div className="flex justify-center items-center h-full gap-20">
      <div className="flex flex-col gap-8">
        <div className="max-w-[571px] max-h-[194px]">
          <h1 className="font-medium text-b1 text-5xl leading-snug">
            You don't have to
          </h1>
          <h1 className="font-bold text-b1 text-5xl leading-snug">
            Fight them Alone.
          </h1>
        </div>
        <span className="font-sm text-lg text-b1/30 max-h-[99px] max-w-[560px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </span>
        <EnterEmail />
      </div>
      <div>
        <img src="./man.png" alt="Man" className="h-[544px] w-[460px]" />
      </div>
    </div>
  );
}
