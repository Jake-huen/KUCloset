import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView, Keyboard, Alert } from "react-native";
import { useLayoutEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../components/Loader";
import COLORS from "../assets/colors/colors";

const LoginScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Email을 입력해주세요", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("비밀번호를 입력해주세요", "password");
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem("userData");
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email == userData.email &&
          inputs.password == userData.password
        ) {
          navigation.navigate("Home");
          AsyncStorage.setItem(
            "userData",
            JSON.stringify({ ...userData, loggedIn: true })
          );
        } else {
          Alert.alert("Error", "잘못된 입력입니다.");
        }
      } else {
        Alert.alert("Error", "유저가 존재하지 않습니다.");
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>
          로그인
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          KULOSET을 위한 로그인을 시작합니다!
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="사용자 님의 이메일을 입력해주세요"
            error={errors.email}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            label="비밀번호"
            placeholder="사용자 님의 비밀번호를 입력해주세요"
            error={errors.password}
            password
          />
          <Button title="로그인" onPress={validate} />
          <Text
            onPress={() => navigation.navigate("Register")}
            style={{
              color: COLORS.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 14,
            }}
          >
            계정이 없습니까? (간단한 회원가입 하러가요!)
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
