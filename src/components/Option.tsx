type Props = {
  children: string;
};
export default function Option({ children }: Props) {
  return (
    <button
      className={`textPreset3 cursor-pointer rounded-full bg-gray-900 p-[.5rem_1rem] text-gray-500 outline-0 hover:bg-white hover:text-gray-900`}
    >
      {children}
    </button>
  );
}
