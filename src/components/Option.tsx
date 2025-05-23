type Props = {
  children: string;
  setOptionSelected: React.Dispatch<React.SetStateAction<number | undefined>>;
  optionSelected: number | undefined;
};
export default function Option({
  optionSelected,
  setOptionSelected,
  children,
}: Props) {
  return (
    <button
      onClick={() => setOptionSelected(Number(children))}
      className={`${optionSelected == Number(children) ? "bg-orange text-gray-900" : "bg-gray-900 text-gray-500 hover:bg-white hover:text-gray-900"} tablet: textPreset3 cursor-pointer rounded-full p-[.5rem_1rem] outline-0`}
    >
      {children}
    </button>
  );
}
