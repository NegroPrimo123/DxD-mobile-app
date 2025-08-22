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
            colors={["#000000", "#8C2AA0"]}
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
            marginHorizontal: 11,
            lineHeight: 24, 
            textAlign: 'justify',
          }}>
          {"Акено Химэдзима (姫ひめ島じま 朱あけ乃の, Химэдзима Акено) — одна из многих главных героинь Старшей школы DxD. Дочь Баракиэля, падшего ангела из отряда, который вскоре стал заместителем генерального губернатора Григори, и Шури Химэдзимы, что делает её потомком клана Химэдзима. После смерти матери Акено вскоре нашли и сделали королевой Риас Гремори, которая стала её лучшей подругой.\n\nАкено — одна из двух великих леди Академии Куо, наряду с Риас. Вскоре она станет студенткой первого курса колледжа. Она также является одной из невест Иссея."}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}