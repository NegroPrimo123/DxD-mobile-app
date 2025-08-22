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
            marginLeft: 13,
            alignSelf: 'flex-start',
          }}
          onPress={() => router.back()}
          >
          <LinearGradient 
            start={{x:0, y:0}}
            end={{x:0, y:1}}
            colors={["#000000", "#DDC300"]}
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
            marginBottom: 20, 
            marginHorizontal: 13,
            lineHeight: 24, 
            textAlign: 'justify', 
          }}>
          {"Асия Аргенто (アーシア・アルジェント, Āshia Arujento) — одна из многих главных героинь Старшей школы DxD. Она учится на третьем курсе старшей школы Куо в классе 3-B. У неё очень доброе сердце, и в её теле находится редкий Священный механизм Сумеречное исцеление, способный исцелять раны людей, ангелов, падших ангелов и дьяволов.\n\nАзия Ардженто раньше была одной из Риас Гремори епископов, но теперь она стала первым епископом Иссея Хёдо и одной из его невесток."}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}