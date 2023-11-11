import { MaterialIcons } from "@expo/vector-icons";
export interface IPlayerCardProps {
  icon?: keyof typeof MaterialIcons.glyphMap;
  name: string;
  onRemove?: () => void;
}
