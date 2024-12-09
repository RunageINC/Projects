import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const SwitchWrapper = ({ label, onSwitch, switchValue }) => {
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="wrapper">{label}</Label>
      <Switch
        id="wrapper"
        onCheckedChange={onSwitch}
        value={switchValue}
        checked={switchValue}
      />
    </div>
  );
};
