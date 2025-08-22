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
              colors={["#000000", "#DDC300"]}
              style={styles.gradient}
            >
              <Text style={styles.backText}>
                {"Назад"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>
          {"Асия — красивая молодая девушка с длинными светлыми волосами и зелёными глазами. Параметры её тела: [B83→85-Ш55-В81→83 см]; рост: [155 см] [5 футов 1 дюйм], вес: [44→45 кг] [97→98 фунтов].\n\nЕё волосы ниспадают на спину, чёлка разделена надвое, а одна прядь зачёсана назад.\n\nЕё прежний основной наряд состоял из тёмно-бирюзового монашеского облачения со светло-голубыми вставками, белой вуали со светло-голубыми вставками, коричневой сумки, висевшей на правом бедре (в ней она хранила Библию), и коричневых ботинок с чёрными ремешками в форме буквы X. На шее у неё было серебряное ожерелье с крестом (позже, став дьяволом, она была вынуждена его снять).\n\nПосле перевода в Академию Куо она носит форму для девочек Академии Куо, но вместо плаща и корсета надевает чёрный жилет поверх классической рубашки, который стал её основным нарядом."}
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
    marginLeft: 13,
  },
  touchable: {
    alignSelf: 'flex-start', 
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 31,
    marginTop: 58,
    marginBottom: 36,
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
    marginBottom: 20,
    marginHorizontal: 19,
    lineHeight: 22,
    textAlign: "justify",
  }
});