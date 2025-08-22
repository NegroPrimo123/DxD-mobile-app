import React from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";

export default function HomeScreen(props: any) {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => router.back()} style={styles.touchable}>
            <LinearGradient 
              start={{x:0, y:0}}
              end={{x:0, y:1}}
              colors={["#000000", "#B2B0B0"]}
              style={styles.gradient}
            >
              <Text style={styles.backText}>
                {"Назад"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>
          {"Из-за того, что Конеко стала свидетельницей того, как её сестра якобы потеряла контроль над своей силой некомата и убила своего хозяина, она получила психологическую травму, из-за которой замкнулась в себе и лишилась большей части своих эмоций.\n\nВ результате Конеко изначально была тихой и холодной девушкой, которая редко проявляла какие-либо чувства или эмоции, даже когда говорила. Отмечается, что её серьёзный характер сформировался под влиянием Риас и что он противоположен озорному и общительному характеру её сестры. Она также была единственной в группе, кто поначалу не поладил с Иссеем, часто оскорбляя и упрекая его за извращённое поведение, хотя она признаётся, что уважает его за то, что он никогда не сдаётся, и считает его трудолюбивым.\n\nОна больше всего беспокоится о своих товарищах, когда они попадают в беду, и часто вкладывает в сражения все свои силы. Конеко, по-видимому, не нравится, когда люди называют её лилипуткой (хотя в контексте этой фразы её можно назвать плоской, то есть с маленьким бюстом), как показано в её втором сражении с Фридом Селлзеном. Возможно, это связано с её неуверенностью в себе из-за маленького роста и размера груди.\n\nКонеко также является обжорой, любительницей еды и настоящим гурманом. Её часто можно увидеть за перекусом, в ресторанах, где она наслаждается региональными блюдами во время гастрономических туров.\n\nВ конце 5-го тома характер Конеко меняется после того, как Иссей помогает ей преодолеть страх перед использованием Сэндзюцу. Теперь она ведёт себя как кошка, часто заканчивает предложения на «ня» (にゃ) и/или проявляет симпатию к Иссэю. Её любовь к Иссэю становится настолько сильной, что в начале 11-го тома у неё начинается брачный период (хотя позже это останавливает её сестра Курока). Однако она по-прежнему оскорбляет его, когда его извращённая натура берёт верх (по крайней мере, когда это не направлено против неё). Конеко даже заявила, что ей нравится, когда Иссей воспринимает её как женщину."}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#242642",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#242642",
  },
  scrollViewContent: {
    paddingBottom: 40,
  },
  buttonContainer: {
    alignItems: 'flex-start',
    marginLeft: 11,
  },
  touchable: {
    alignSelf: 'flex-start',
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 31,
    marginTop: 58,
    marginBottom: 35,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    color: "#C1C1C1",
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 40,
    marginHorizontal: 12,
    lineHeight: 22,
    textAlign: "justify",
  }
});