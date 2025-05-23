type Props = {
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  optionSelected: number | undefined;
};

export default function Button({ optionSelected, setIsSubmit }: Props) {
  return (
    <button
      onClick={() => {
        if (optionSelected) setIsSubmit(true);
      }}
      className="bg-orange tablet:font-[overpassSemiBold] textPreset5Bold w-full cursor-pointer rounded-[1.40625rem] py-[1rem] text-gray-950 outline-0 hover:bg-white"
    >
      SUBMIT
    </button>
  );
}
