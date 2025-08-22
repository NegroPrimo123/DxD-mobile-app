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
            marginBottom: 35,
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
            marginBottom: 20, 
            marginHorizontal: 11,
            lineHeight: 24, 
            textAlign: 'justify', 
          }}>
          {"Конеко — миниатюрная девушка с белыми волосами и золотыми глазами. Параметры её тела: [Ш67-В57-Г73 см] [Ш26-В22-Г29 дюймов]. Весит она [31 кг] [68 фунтов]. Спереди у неё две длинные чёлки, спускающиеся ниже плеч, и несколько свободных прядей, свисающих на лоб, а сзади — короткая стрижка. Она также носит по обеим сторонам головы заколки в форме чёрных кошек, в одной из которых содержатся данные об искусственном создании новых Супер Дьяволов.\n\nОбычно она носит школьную форму Академии Куо для девочек без накидки. Рост Конеко составляет 138 см (4 фута 6 дюймов), что делает её одной из самых низкорослых женских персонажей в сериале.\n\nВ своей Некоматской форме она отращивает пару белых кошачьих ушей и пару таких же белых хвостов, а её зрачки становятся более кошачьими. В 24-м томе у неё появилось три хвоста.\n\nВ «режиме Широне», который она впервые применила в 16-м томе, Конеко может становиться старше, а её наряд состоит из короткого белого кимоно и светло-голубой юбки. В этом режиме её грудь значительно увеличивается, и она становится больше похожа на свою сестру Куроку.\n\nВ аниме во время рейтинговой игры между Риас и Райзером Феникс на ней были чёрные боевые перчатки без пальцев с розовыми отпечатками кошачьих лап на верхней части ладони."}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}