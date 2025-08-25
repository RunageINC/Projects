import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProp {
  id: number;
  name: string;
}

export const SelectorWrapper = ({
  label,
  selectValues,
}: {
  label: string;
  selectValues: SelectProp[];
}) => (
  <Select>
    <SelectTrigger className="w-full">
      <SelectValue placeholder={label} />
    </SelectTrigger>
    <SelectContent>
      {selectValues.map((selectValue) => (
        <SelectItem key={selectValue.id} value={selectValue.id.toString()}>
          {selectValue.name}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);
