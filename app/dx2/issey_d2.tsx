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
            marginBottom: 20,
            marginHorizontal: 10,
            lineHeight: 24, 
            textAlign: 'justify', 
          }}>
          {"Иссей — обычный старшеклассник с короткими торчащими каштановыми волосами, двумя короткими прядями, заплетёнными в косички, и светло-карими глазами. После тренировок с Таннином он стал более мускулистым и подтянутым.[3]\n\nНа протяжении всего сериала он носил разную одежду, но чаще всего — школьную форму для мальчиков Академии Куо, которая состоит из блейзера (обычно чёрного, хотя в других источниках он показан с фиолетовым или серым оттенком и белыми вставками) поверх белой классической рубашки с длинными рукавами и чёрными вставками, с чёрной лентой на воротнике, чёрных брюк и коричневых классических туфель. Однако форма Иссея отличается тем, что под расстёгнутой классической рубашкой и блейзером он носит красную футболку, а вместо классических туфель — сине-белые кроссовки.\n\nПеред тем как сразиться с Райзером в матче-реванше, левая рука Иссея превратилась в драконью руку[4], и для того, чтобы она выглядела как человеческая, Риас и Акено регулярно проводили ритуал. После своей «смерти» он обрёл новое тело благодаря усилиям Грейт Ред и Офиса и теперь может превращать части своего тела в драконьи[5]\n\nПо словам его бабушки по отцовской линии, он унаследовал мужественные черты. Рост Иссея составляет 170 см (5 футов 7 дюймов), а вес — 62–65 кг (137–140 фунтов)."}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}