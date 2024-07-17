import { LightSensor } from "expo-sensors"
import Ionicons from "@expo/vector-icons/Ionicons"
import { Text, View } from "react-native"
import { useCallback, useEffect, useState } from "react"

export default function LigthtSensorPage() {
    const [light, setLight] = useState<number>(0)
    const [message, setMessage] = useState<string>()
    
    const getIlluminance = useCallback(() => {
        LightSensor.addListener(({illuminance}) => setLight(illuminance))

        if (light <= 10) {
            setMessage("A iluminação mínima detectável pelo olho humano em condições ideais de escuridão total.")
        }
        
        else if (light <= 20) {
            setMessage("Iluminação mínima para atividades noturnas, como caminhar em ambientes externos")
        }
        
        else if (light <= 100) {
            setMessage("Iluminação típica em um ambiente residencial à noite, com algumas luzes acesas.")
        }
        
        else if (light <= 300) {
            setMessage("Iluminação típica em lares e escritórios durante o dia, fornecendo uma iluminação adequada para a maioria das tarefas visuais.")
        }
    
        else if (light <= 1000) {
            setMessage("Iluminação geralmente usada em áreas de trabalho industriais, como fábricas e armazéns, para melhorar a visibilidade e a segurança.")
        }
    
        else if (light > 1000) {
            setMessage("Iluminação direta do sol em um dia claro, medida em um local aberto e sob a luz solar direta")
        }
    }, [LightSensor, light])
    
    useEffect(() => {
        getIlluminance()
    }, [getIlluminance])

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", width: 300}}>
            <Ionicons name="sunny" size={64}/>

            <Text style={{fontSize: 20, paddingVertical: 20, textAlign: "center"}}>
                Intensidade da luz: {light.toFixed(2)} lux
            </Text>
            
            <Text style={{fontSize: 18, textAlign: "center"}}>
                {message}
            </Text>
        </View>
    </View>
  )
}
