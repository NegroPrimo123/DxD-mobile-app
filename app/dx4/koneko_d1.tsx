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
            marginLeft: 11,
            alignSelf: 'flex-start',
          }}
          onPress={() => router.back()}
          >
          <LinearGradient 
            start={{x:0, y:0}}
            end={{x:0, y:1}}
            colors={["#000000", "#B2B0B0"]}
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
            marginHorizontal: 11,
            lineHeight: 24,
            textAlign: 'justify', 
          }}>
          {"Конеко Тодзё (塔とう城じょう 小こ猫ねこ, Тодзё Конеко), изначально носившая имя Сироне (白しろ音ね), — одна из главных героинь Старшей школы DxD. Сначала она учится на первом курсе Академии Куо, а затем переходит на второй курс и становится членом Клуба оккультных исследований. Она — Нэкошоу, редкий вид Нэкомата, младшая сестра Куроки, а также первая Ладья Риас Гремори.\n\nСтав одной из невесток Иссея, а затем примирившись с собой, своим прошлым и Курокой, Конеко начал называть себя Сироне Тодзё (塔とう城じょう 白しろ音ね, Тодзё Сироне)."}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}