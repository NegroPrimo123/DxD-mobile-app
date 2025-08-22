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
            marginBottom: 26,
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
            marginBottom: 20, 
            marginHorizontal: 11,
            lineHeight: 24, 
            textAlign: 'justify', 
          }}>
          {"Риас — красивая молодая девушка, с белой кожей, голубыми глазами (сине-зелёными в аниме, 1–3-й сезоны), унаследованными от её отца Зеотикуса, и пышной грудью. Параметры её тела: [В99-Ш58-Г90 см] [В39-Ш23-Г35 дюймов]. Вес её тела: [58 кг] [128 фунтов].\n\nЕё самая отличительная черта — длинные, красивые, ярко-красные волосы, которые она унаследовала от отца. Они доходят до бёдер, а сверху торчит одна прядь (в Японии её называют ахогэ). Её волосы также ниспадают на лоб и обрамляют лицо. Рост Риас — 172 см. (5 футов 8 дюймов), что делает её одной из самых высоких женских персонажей в сериале.\n\nХотя на протяжении всего сериала Риас носила разную одежду, чаще всего она надевала школьную форму для девочек Академии Куо, которая состоит из белой рубашки с длинными рукавами на пуговицах (с короткими рукавами весной и летом), с чёрной лентой на воротнике, которую носят под чёрной накидкой на одно плечо, и такого же корсета на пуговицах, пурпурной юбки с белыми вставками и коричневых туфель на белых гольфах. Риас также любит носить соблазнительное нижнее бельё и стринги, особенно когда ей хочется переспать с Иссеем.\n\nВ редких случаях Риас надевает очки, когда глубоко задумывается, так как считает, что они помогают ей лучше соображать, несмотря на идеальное зрение."}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}