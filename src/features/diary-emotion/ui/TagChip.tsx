interface TagChipProps {
  label: string;
  isSelected: boolean;
  onClick?: () => void;
}

export const TagChip = ({ label, isSelected, onClick }: TagChipProps): React.ReactElement => {
  const className = `body1 rounded-full px-3 py-2 ${
    isSelected ? "bg-gray-700 text-gray-0" : "bg-background text-gray-500"
  }`;

  if (!onClick) {
    return <span className={className}>{label}</span>;
  }

  return (
    <button type="button" onClick={onClick} className={`cursor-pointer ${className}`}>
      {label}
    </button>
  );
};
