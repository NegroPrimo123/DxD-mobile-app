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
            marginLeft: 12,
            alignSelf: 'flex-start',
          }}
          onPress={() => router.back()}
          >
          <LinearGradient 
            start={{x:0, y:0}}
            end={{x:0, y:1}}
            colors={["#000000", "#964600"]}
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
            marginHorizontal: 12,
            lineHeight: 24, 
            textAlign: 'justify', 
          }}>
          {"Иссей Хёдо (兵ひょう藤どう 一いっ誠せい, Хёдо Иссей) — главный герой мужского пола в High School DxD. Он учится на третьем курсе старшей школы Куо в классе 3-B и является членом школьного «Извращённого трио» — группы самых извращённых учеников во всей школе.\n\nИссей — Пешка Риас Гремори Пэрства и член Клуба оккультных исследований. После Войны Злого Дракона он получил звание Дьявола высокого класса, стал королём собственного независимого пэрства и на шаг приблизился к осуществлению своей мечты — гарему и статусу «Короля гарема».\n\nБлагодаря тому, что он владеет Лонгинусом; Усиленным снаряжением, в котором заключён Валлийский дракон, Ддрейг, Иссей является прямым соперником Вали Люцифера, в котором заключён Исчезающий дракон; Альбион, заклятый враг Ддрейга."}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}