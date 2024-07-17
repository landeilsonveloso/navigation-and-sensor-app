import { Image, Text, View } from "react-native"

export default function IndexPage() {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center", width: 300}}>
                <View>
                    <Image style={{width: 100, height: 100}} source={require("../assets/images/react-logo.png")}/>
                </View>

                <Text style={{fontSize: 20, textAlign: "center", paddingVertical: 20}}>
                    Sensor de Luz (Light Sensor)
                </Text>

                <Text style={{fontSize: 18, textAlign: "center"}}>
                    É um componente eletrônico que detecta a intensidade de luz ambiente ao redor de um dispositivo.
                </Text>
            </View>
        </View>
    )
}
