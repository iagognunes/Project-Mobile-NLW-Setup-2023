import { useState } from "react";
import { View, ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import { BackButton } from "../components/backButton";
import { CheckBox } from "../components/checkBox";
import { Feather } from "@expo/vector-icons";
import colors from 'tailwindcss/colors';

const availableWeekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export function New() {

  const [weekDays, setWeekDays] = useState<Number[]>([]);

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex));
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
  }

  return (
    <View
      className="flex-1 bg-background px-8 pt-16"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
      >
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar Hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
          placeholder="Exercícios, dormir bem, etc."
          placeholderTextColor={colors.zinc[400]}
        />

        <Text
          className="mt-4 mb-3 text-white font-semibold text-base"
        >
          Qual a recorrência?
        </Text>

        {
          availableWeekDays.map((weekday, index) => (
            <CheckBox
              key={weekday}
              title={weekday}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDay(index)}
            />
          ))
        }

        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center justify-center w-full bg-green-600 rounded-md mt-6 h-12"
        >
          <Feather
            name="check"
            size={20}
            color={colors.white}
          />

          <Text
            className="ml-2 text-white font-semibold text-base"
          >
            Confirmar
          </Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}