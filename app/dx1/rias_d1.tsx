import React from "react";
import { 
  SafeAreaView, 
  View, 
  ScrollView, 
  Text, 
  TouchableOpacity 
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router"; 

export default function HomeScreen(props: any) {
  const router = useRouter(); 

  return (
    <SafeAreaView 
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
      <ScrollView  
        style={{
          flex: 1,
          backgroundColor: "#242642",
        }}
        contentContainerStyle={{ paddingBottom: 20 }}
        >
        {/* Кнопка Назад */}
        <TouchableOpacity 
          style={{
            marginTop: 58,
            marginBottom: 19,
            marginLeft: 10,
            alignSelf: 'flex-start',
          }}
          onPress={() => router.back()}
          >
          <LinearGradient 
            start={{x:0, y:0}}
            end={{x:0, y:1}}
            colors={["#000000", "#933232"]}
            style={{
              paddingVertical: 3,
              paddingHorizontal: 31,
              borderRadius: 5, 
            }}>
            <Text 
              style={{
                color: "#C1C1C1",
                fontSize: 32,
                fontWeight: "bold",
              }}>
              {"Назад"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        
        <Text 
          style={{
            color: "#FFFFFF",
            fontSize: 16,
            marginHorizontal: 10,
            lineHeight: 24, 
            textAlign: 'justify', 
          }}>
          {"Риас Гремори (リアス・グレモリー, Риасу Гуремори) — главная героиня DxD.\n\nОна является наследницей клана Гремори после того, как её старший брат, Сирzechs, занял место Люцифера. Риас — единственная дочь и младший ребёнок Зеотикуса и Венеланы Гремори, тётя Милликас Гремори и двоюродная сестра по материнской линии Сайраорга и Магдарана Баэля.\n\nОна стала известна как Алая Принцесса Разрушения из-за цвета своих волос и Силы Разрушения. Сейчас Риас учится на первом курсе Академии Куо, является бывшим президентом Клуба Оккультных Исследований и первой красавицей школы, а также одной из двух великих леди Академии Куо наряду с Акено Химэдзимой. Она является госпожой Иссея и одной из его невесток."}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}