import React from "react";
import { 
  SafeAreaView, 
  View, 
  ImageBackground, 
  ScrollView, 
  Text, 
  Image, 
  TouchableOpacity 
} from "react-native";
import { Link } from 'expo-router';
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
      <ImageBackground 
        source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/o5px9b4h_expires_30_days.png"}} 
        resizeMode={'cover'}
        style={{
          flex: 1,
        }}
        >
        <ScrollView  
          style={{
            flex: 1,
          }}
          contentContainerStyle={{ 
            paddingBottom: 20,
            alignItems: "center",
          }}
          >
          {/* Заголовок */}
          <Text 
            style={{
              color: "#FF0606",
              fontSize: 40,
              marginTop: 20,
              marginBottom: 30,
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
            }}>
            {"Персонажи"}
          </Text>
          
          {/* Контейнер для всех рядов */}
          <View 
            style={{
              width: "100%",
              paddingHorizontal: 20,
              alignItems: "center",
            }}>
            
            {/* Первый ряд изображений */}
            <View 
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 30,
              }}>
              <View style={{ width: 160, height: 160, alignItems: "center", justifyContent: "center" }}>
                <Link href='/rias'>
                  <Image
                    source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/9wz8r5vc_expires_30_days.png"}} 
                    resizeMode={"contain"} 
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </View>
              <View style={{ width: 160, height: 160, alignItems: "center", justifyContent: "center" }}>
                <Link href='/issey'>
                  <Image
                    source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/nhde18hx_expires_30_days.png"}} 
                    resizeMode={"contain"} 
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </View>
            </View>
            
            {/* Второй ряд изображений */}
            <View 
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 30,
              }}>
              <View style={{ width: 160, height: 160, alignItems: "center", justifyContent: "center" }}>
                <Link href='/akeno'>
                  <Image
                    source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/mbfxo2az_expires_30_days.png"}} 
                    resizeMode={"contain"} 
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </View>
              <View style={{ width: 160, height: 160, alignItems: "center", justifyContent: "center" }}>
                <Link href='/koneko'>
                  <Image
                    source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/np8d53hm_expires_30_days.png"}} 
                    resizeMode={"contain"} 
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </View>
            </View>
            
            {/* Третий ряд изображений */}
            <View 
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: 40,
              }}>
              <View style={{ width: 160, height: 160, alignItems: "center", justifyContent: "center" }}>
                <Link href='/asia'>
                  <Image
                    source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/vtmyx9ot_expires_30_days.png"}} 
                    resizeMode={"contain"} 
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </View>
              <View style={{ width: 160, height: 160, alignItems: "center", justifyContent: "center" }}>
                <Link href='/yuto'>
                  <Image
                    source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/p4epo4jv_expires_30_days.png"}} 
                    resizeMode={"contain"} 
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Link>
              </View>
            </View>
          </View>
          
          {/* Кнопка Назад */}
          <TouchableOpacity 
            onPress={() => router.back()}
            activeOpacity={0.7}
            >
            <LinearGradient 
              start={{x:0, y:0}}
              end={{x:0, y:1}}
              colors={["#000000", "#933232"]}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 40,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Text 
                style={{
                  color: "#C1C1C1",
                  fontSize: 28,
                  fontWeight: "bold",
                }}>
                {"Назад"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}