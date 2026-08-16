import {
    Image,
    KeyboardAvoidingView,
    Pressable,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    TextInput,
    View,
} from "react-native";
import { useState } from "react";

const LoginScreen = () => {

    const [isLogin, setIsLogin] = useState(true);
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar barStyle="dark-content" backgroundColor="#F3FBFA" />
            <KeyboardAvoidingView
                behavior="height"
                style={styles.keyboardView}
            >
                <View style={styles.backgroundCircleTop} />
                <View style={styles.backgroundCircleBottom} />

                <View style={styles.content}>
                    <View style={styles.brandBlock}>
                        <View style={styles.logoShell}>
                            <Image
                                source={require("../images/msrofylogo.png")}
                                style={styles.logo}
                                resizeMode="contain"
                            />
                        </View>
                        <Text style={styles.brandName}>Msrofy</Text>
                        <Text style={styles.tagline}>Masroofek m-qadd f blasa wa7da.</Text>
                    </View>

                    {isLogin ? (
                        <View style={styles.formCard}>
                            <Text style={styles.title}>Welcome back</Text>
                            <Text style={styles.subtitle}>Login to manage your daily expenses.</Text>

                            <View style={styles.fieldGroup}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    placeholder="you@example.com"
                                    placeholderTextColor="#89A5A7"
                                    style={styles.input}
                                />
                            </View>

                            <View style={styles.fieldGroup}>
                                <Text style={styles.label}>Password</Text>
                                <TextInput
                                    placeholder="Enter your password"
                                    placeholderTextColor="#89A5A7"
                                    secureTextEntry
                                    style={styles.input}
                                />
                            </View>

                            <View style={styles.formMeta}>
                                <Pressable>
                                    <Text style={styles.rememberText}>Remember me</Text>
                                </Pressable>
                                <Pressable>
                                    <Text style={styles.linkText}>Forgot password?</Text>
                                </Pressable>
                            </View>

                            <Pressable style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>Login</Text>
                            </Pressable>

                            <View style={styles.signupRow}>
                                <Text style={styles.signupText}>New to Msrofy?</Text>
                                <Pressable
                                    onPress={() => setIsLogin(false)}>
                                    <Text style={styles.signupLink}> Create account</Text>
                                </Pressable>
                            </View>
                        </View>
                    ) : (
                        <View style={styles.formCard}>
                            <Text style={styles.title}>Create Account</Text>
                            <Text style={styles.subtitle}>Sign up to manage your daily expenses.</Text>

                            <View style={styles.fieldGroup}>
                                <Text style={styles.label}>Full Name</Text>
                                <TextInput
                                    autoCapitalize="words"
                                    placeholder="John Doe"
                                    placeholderTextColor="#89A5A7"
                                    style={styles.input}
                                />
                            </View>

                            <View style={styles.fieldGroup}>
                                <Text style={styles.label}>Email</Text>
                                <TextInput
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    placeholder="you@example.com"
                                    placeholderTextColor="#89A5A7"
                                    style={styles.input}
                                />
                            </View>

                            <View style={styles.fieldGroup}>
                                <Text style={styles.label}>Password</Text>
                                <TextInput
                                    placeholder="Create a password"
                                    placeholderTextColor="#89A5A7"
                                    secureTextEntry
                                    style={styles.input}
                                />
                            </View>

                            <Pressable style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>Create Account</Text>
                            </Pressable>

                            <View style={styles.signupRow}>
                                <Text style={styles.signupText}>Already have an account?</Text>
                                <Pressable
                                    onPress={() => setIsLogin(true)}>
                                    <Text style={styles.signupLink}> Login</Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F3FBFA",
    },
    keyboardView: {
        flex: 1,
    },
    backgroundCircleTop: {
        position: "absolute",
        top: -110,
        right: -90,
        width: 260,
        height: 260,
        borderRadius: 130,
        backgroundColor: "#BFEDEE",
    },
    backgroundCircleBottom: {
        position: "absolute",
        bottom: -150,
        left: -95,
        width: 300,
        height: 300,
        borderRadius: 150,
        backgroundColor: "#FFE4A7",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        paddingVertical: 28,
    },
    brandBlock: {
        alignItems: "center",
        marginBottom: 24,
    },
    logoShell: {
        width: 146,
        height: 146,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 73,
        backgroundColor: "#FFFFFF",
        shadowColor: "#087A80",
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.16,
        shadowRadius: 22,
        elevation: 8,
    },
    logo: {
        width: 126,
        height: 126,
    },
    brandName: {
        marginTop: 16,
        color: "#075E63",
        fontSize: 34,
        fontWeight: "800",
    },
    tagline: {
        marginTop: 6,
        color: "#4F7073",
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
    },
    formCard: {
        borderWidth: 1,
        borderColor: "#D9EEEE",
        borderRadius: 26,
        backgroundColor: "#FFFFFF",
        padding: 22,
        shadowColor: "#0A666D",
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 0.13,
        shadowRadius: 28,
        elevation: 7,
    },
    title: {
        color: "#11383B",
        fontSize: 28,
        fontWeight: "800",
    },
    subtitle: {
        marginTop: 6,
        marginBottom: 22,
        color: "#6B8587",
        fontSize: 15,
        lineHeight: 21,
    },
    fieldGroup: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 8,
        color: "#174B50",
        fontSize: 14,
        fontWeight: "700",
    },
    input: {
        height: 54,
        borderWidth: 1,
        borderColor: "#CBE4E3",
        borderRadius: 16,
        backgroundColor: "#F7FCFC",
        paddingHorizontal: 16,
        color: "#173C3F",
        fontSize: 16,
    },
    formMeta: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    rememberText: {
        color: "#5F797B",
        fontSize: 14,
        fontWeight: "600",
    },
    linkText: {
        color: "#0E8D94",
        fontSize: 14,
        fontWeight: "800",
    },
    loginButton: {
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
        backgroundColor: "#07858C",
        shadowColor: "#05656B",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.24,
        shadowRadius: 18,
        elevation: 6,
    },
    loginButtonText: {
        color: "#FFFFFF",
        fontSize: 17,
        fontWeight: "800",
    },
    signupRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 18,
    },
    signupText: {
        color: "#71888A",
        fontSize: 14,
        fontWeight: "600",
    },
    signupLink: {
        color: "#D99924",
        fontSize: 14,
        fontWeight: "800",
    },
});

export default LoginScreen;
