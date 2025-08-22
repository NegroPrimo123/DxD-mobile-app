import React from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";

export default function HomeScreen(props: any) {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => router.back()} style={styles.touchable}>
            <LinearGradient 
              start={{x:0, y:0}}
              end={{x:0, y:1}}
              colors={["#000000", "#D05701"]}
              style={styles.gradient}
            >
              <Text style={styles.backText}>
                {"Назад"}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>
          {"Юто — красивый молодой человек с короткими светлыми волосами, голубыми глазами (в аниме — голубовато-серыми) и родинкой под левым глазом.\n\nОн носит школьную форму для мальчиков Академии Куо, которая состоит из чёрного пиджака с белыми вставками поверх белой рубашки с длинными рукавами и чёрной лентой на воротнике, чёрных брюк в тон и коричневых классических туфель."}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#242642",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#242642",
  },
  scrollViewContent: {
    paddingBottom: 40,
  },
  buttonContainer: {
    alignItems: 'flex-start',
    marginLeft: 16,
  },
  touchable: {
    alignSelf: 'flex-start',
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 31,
    marginTop: 58,
    marginBottom: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    color: "#C1C1C1",
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 40,
    marginHorizontal: 16,
    lineHeight: 22,
    textAlign: "justify",
  }
});