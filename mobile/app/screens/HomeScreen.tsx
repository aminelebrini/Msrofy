import { Text, View, Image } from "react-native";


const HomeScreen = ({ navigation }: any) => {


    const navigateToLogin = () => {
        navigation.navigate("Login");
    }
    setTimeout(() => {
        navigateToLogin();
    }, 3000);
    return (
        <View style={{ backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image source={require("../images/msrofylogo.png")}
                    style={{
                        width: 200, height: 200,
                    }}
                />
                <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>Welcome to Msrofy!</Text>
                <Text style={{ fontSize: 16, marginTop: 5 }}>Masroofek m-qadd f blasa wa7da.</Text>
            </View>
        </View>
    );
};



export default HomeScreen;