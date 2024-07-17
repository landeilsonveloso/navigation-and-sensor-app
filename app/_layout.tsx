import { Drawer } from "expo-router/drawer"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function Layout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Início",
            title: "",
            drawerIcon: () => <Ionicons name="home-outline" size={18} color={"#3A98FF"}/>
          }}
        />

        <Drawer.Screen
          name="lightSensor"
          options={{
            drawerLabel: "Sensor de Luz",
            title: "",
            drawerIcon: () => <Ionicons name="sunny-outline" size={18} color={"#3A98FF"}/>
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
