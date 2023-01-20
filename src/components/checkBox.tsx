import { TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from 'tailwindcss/colors';

interface Props extends TouchableOpacityProps{
  checked?: boolean,
  title: string,
}

export function CheckBox({ checked = false, title, ...rest}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row items-center"
      {...rest}
    >
      {
        checked
          ?
          <View
            className="h-8 w-8 bg-green-500 items-center justify-center rounded-lg mb-2"
          >
            <Feather
              name="check"
              size={20}
              color={colors.white}
            />
          </View>
          :
          <View
            className="h-8 w-8 bg-zinc-900 rounded-lg mb-2"
          />
      }

      <Text
        className="text-white text-base ml-3 mb-2 text-semibold"
      >
        {title}
      </Text>

    </TouchableOpacity>
  );
}