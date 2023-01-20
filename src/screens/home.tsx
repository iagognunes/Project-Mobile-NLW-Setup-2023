import { TouchableOpacity, TouchableOpacityProps, View, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HabitDay, daySize } from "../components/habitDay";
import { Header } from "../components/header";
import { generateDateFromYearFromBeginning } from '../utils/generate-days-from-year';

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

const datesFromYearStart = generateDateFromYearFromBeginning();

const minimumSummaryDatesSizes = 18 * 5;

const amountOfDaysToFill = minimumSummaryDatesSizes - datesFromYearStart.length;

export function Home() {

  const { navigate } = useNavigation();

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {
          weekDays.map(
            (weekDay, i) => {
              return (
                <Text
                  key={`${weekDay}-${i}`}
                  className="text-zinc-400 text-xl font-bold text-center mx-1"
                >
                  {weekDay}
                </Text>
              );
            })
        }
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View
          className="flex-row flex-wrap"
        >
          {
            datesFromYearStart.map(date => (
              <HabitDay
                key={date.toString()}
                onPress={() => navigate('habit', { date: date.toISOString() })}
              />
            ))
          }
          {
            amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => {
              return (
                <View
                  key={index}
                  className="bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 m-1"
                  style={{ width: daySize, height: daySize }}
                />
              );
            })
          }
        </View>
      </ScrollView>

    </View>

  );
}