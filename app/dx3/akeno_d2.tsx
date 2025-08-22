import React from "react";
import { 
  SafeAreaView, 
  View, 
  ScrollView, 
  Text, 
  TouchableOpacity // Добавлен импорт
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; // Исправленный импорт
import { useRouter } from "expo-router"; // Добавлен импорт для навигации

export default function HomeScreen(props: any) {
  const router = useRouter(); // Добавлен хук для навигации

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
        contentContainerStyle={{ paddingBottom: 20 }} // Добавлен отступ снизу
        >
        {/* Кнопка Назад */}
        <TouchableOpacity 
          style={{
            marginTop: 58,
            marginBottom: 28,
            marginLeft: 10,
            alignSelf: 'flex-start',
          }}
          onPress={() => router.back()}
          >
          <LinearGradient 
            start={{x:0, y:0}}
            end={{x:0, y:1}}
            colors={["#000000", "#8C2AA0"]}
            style={{
              paddingVertical: 3,
              paddingHorizontal: 31,
              borderRadius: 5, // Добавлен для скругления углов
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
            marginBottom: 20, // Изменено с 81 на 20
            marginHorizontal: 10,
            lineHeight: 24, // Добавлен для лучшей читаемости
            textAlign: 'justify', // Добавлен для выравнивания по ширине
          }}>
          {"Акено — красивая молодая девушка, с очень длинными чёрными волосами и фиолетовыми глазами. Обычно она собирает волосы в очень высокий хвост, который достаёт до пола, а две пряди, выбившиеся из хвоста, зачёсывает назад и закрепляет оранжевой лентой.\n\nКак и большинство девушек из Академии Куо, она носит традиционную школьную форму Академии Куо и чёрные гольфы.\n\nКак указано в визуальной книге с её данными [1], параметры её тела составляют [B102-Ш60-В89 см] [B40-Ш24-В35 дюймов]. Её вес составляет [54 кг] [119 фунтов], а рост — 168 см (5 футов 6 дюймов).\n\nВ аниме во время сражений она часто переодевается в традиционный наряд мико, состоящий из белого хаори с красными вставками, красной хакамы и пары дзори с белыми таби.\n\nПосле того как Акено раскрыла перед Иссеем свою сущность падшего ангела, у неё появилось одно дьявольское крыло и одно крыло падшего ангела.[2] По мере развития сюжета и осознания своих сил падшего ангела количество её крыльев увеличилось до шести, сначала благодаря браслетам Азазеля,[3] а затем до восьми, как у падшего ангела высокого уровня.[4]"}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}