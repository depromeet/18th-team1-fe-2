interface TagChipProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const TagChip = ({ label, isSelected, onClick }: TagChipProps): React.ReactElement => (
  <button
    type="button"
    onClick={onClick}
    className={`body1 cursor-pointer rounded-full px-3 py-2 ${
      isSelected ? "bg-gray-700 text-gray-0" : "bg-background text-gray-500"
    }`}
  >
    {label}
  </button>
);
