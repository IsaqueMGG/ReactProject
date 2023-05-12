import { Drawer } from "expo-router/drawer";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Drawer>
        <Drawer.Screen
            name="index"
            options={{
                drawerLabel: "Home",
                title: "overview",
            }}
        />
        <Drawer.Screen
            name="Tela 1"
            options={{
                drawerLabel: "Tela 1",
                title: "overview",
            }}
        />
        <Drawer.Screen
            name="Tela 2"
            options={{
                drawerLabel: "Tela 2",
                title: "overview",
            }}
        />
    </Drawer>
  )
}
