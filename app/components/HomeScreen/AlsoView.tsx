import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/app/utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Define type for course category
type CourseCategory = {
  id: string;
  name: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  color: string;
  price: string;
};

const courseCategories: CourseCategory[] = [
  {
    id: "1",
    name: "JavaScript",
    iconName: "code",
    color: "#f7df1e",
    price: "₹499",
  },
  {
    id: "2",
    name: "React",
    iconName: "code",
    color: "#61dafb",
    price: "₹199",
  },
  {
    id: "3",
    name: "UX/UI",
    iconName: "dashboard",
    color: "#ff7700",
    price: "₹699",
  },
  {
    id: "4",
    name: "Python",
    iconName: "code",
    color: "#306998",
    price: "₹299",
  },
  {
    id: "5",
    name: "Flutter",
    iconName: "mobile-friendly",
    color: "#0553B1",
    price: "₹499",
  },
  {
    id: "6",
    name: "Node.js",
    iconName: "dns",
    color: "#6cc24a",
    price: "₹499",
  },
  {
    id: "7",
    name: "Angular",
    iconName: "web",
    color: "#dd0031",
    price: "₹399",
  },
  {
    id: "8",
    name: "Vue.js",
    iconName: "web",
    color: "#42b883",
    price: "₹399",
  },
  {
    id: "9",
    name: "Swift",
    iconName: "phone-iphone",
    color: "#ff4725",
    price: "₹799",
  },
  {
    id: "10",
    name: "Kotlin",
    iconName: "android",
    color: "#7f52ff",
    price: "₹499",
  },
];

const AlsoView = () => {
  // Using any type for navigation to avoid TypeScript errors
  const navigation = useNavigation<any>();

  const handleCategoryPress = (category: CourseCategory) => {
    // You can navigate to a category detail screen or course listing
    console.log(`Selected category: ${category.name}`);
    // Uncomment and modify this line when you have the actual screen to navigate to
    // navigation.navigate('CategoryDetail', { category });

    // For now, just show visual feedback through the TouchableOpacity
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Also View</Text>
      <View>
        {/* Using regular View with map instead of FlatList for better rendering */}
        <View style={styles.gridContainer}>
          {courseCategories.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.7}
              onPress={() => handleCategoryPress(item)}
            >
              <View style={styles.iconContainer}>
                <View
                  style={[
                    styles.iconBackground,
                    { backgroundColor: item.color },
                  ]}
                >
                  <MaterialIcons name={item.iconName} size={24} color="white" />
                </View>
                <Text style={styles.categoryName}>{item.name}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default AlsoView;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontFamily: "PopBold",
    fontSize: 24,
    color: Colors.PRIMARY,
    marginBottom: 15,
    marginLeft: 8,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 15,
  },
  iconContainer: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryName: {
    fontFamily: "PopSb",
    fontSize: 16,
    color: "#000",
  },
  priceContainer: {
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    alignItems: "center",
  },
  price: {
    color: "white",
    fontFamily: "PopSb",
  },
});
