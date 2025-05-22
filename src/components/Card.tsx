import Button from "./Button";
import Option from "./Option";

export default function Card() {
  return (
    <article className="transition-all duration-200 linear tablet:w-5/10 flex w-18/20 flex-col gap-[1.5rem] rounded-[1rem] bg-linear-to-br from-[#232A34] to-[#181E27] p-[1.5rem]">
      <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-gray-900">
        <img
          src="/images/icon-star.svg"
          alt="start image"
          className="scale-200 p-[1rem]"
        />
      </div>
      <section className="flex flex-col gap-[1rem]">
        <h1 className="textPreset2 text-white">How did we do?</h1>
        <p className="textPreset5Regular text-gray-500">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex justify-evenly gap-[1rem]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Option>{String(index)}</Option>
          ))}
        </div>
      </section>
      <Button />
    </article>
  );
}
