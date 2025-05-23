import { useState } from "react";
import Button from "./Button";
import Option from "./Option";

export default function Card() {
  const [optionSelected, setOptionSelected] = useState<number>();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  return (
    <article
      className={`linear tablet:p-[2.5rem_2rem] tablet:w-5/10 flex w-18/20 flex-col gap-[1.5rem] rounded-[1rem] bg-linear-to-br from-[#232A34] to-[#181E27] p-[1.5rem] transition-all duration-200`}
    >
      {isSubmit ? (
        <>
          <img
            className="w-2/3 self-center"
            src="/images/illustration-thank-you.svg"
            alt="Thank You Image"
          />
          <p className="textPreset5Regular tablet:text-[0.9375rem] text-orange w-fit self-center rounded-[1.4rem] bg-gray-900 px-[1rem] py-1">{`You selected ${optionSelected} of 5`}</p>
          <div className="space-y-[1rem]">
            <h1 className="textPreset2 text-center text-[1.75rem] text-white">
              Thank You
            </h1>
            <p className="textPreset5Regular tablet:text-[0.9375rem] text-center text-gray-500">
              We appreciate you tiking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-gray-900">
            <img
              src="/images/icon-star.svg"
              alt="start image"
              className="scale-200 p-[1rem]"
            />
          </div>
          <section className="flex flex-col gap-[1rem]">
            <h1 className="tablet:text-[1.75rem] textPreset2 text-white">
              How did we do?
            </h1>
            <p className="textPreset5Regular tablet:text-[0.9375rem] text-gray-500">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex flex-wrap justify-evenly gap-[1rem]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Option
                  optionSelected={optionSelected}
                  setOptionSelected={setOptionSelected}
                >
                  {String(index + 1)}
                </Option>
              ))}
            </div>
          </section>
          <Button optionSelected={optionSelected} setIsSubmit={setIsSubmit} />
        </>
      )}
    </article>
  );
}
