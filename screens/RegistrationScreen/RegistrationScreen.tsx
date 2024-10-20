import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import styles from "./RegistrationScreenStyles";
import { useState } from "react";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeLogin = (value: string) => {
    setLogin(value);
  };
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bg.png")}
        style={styles.imageBackground}
      />
      <View style={styles.contentContainer}>
        <View style={styles.avatarContainer}>
          {/* <Image
              source={require("../../assets/images/girl.png")}
              style={styles.avatar}
            /> */}
          <TouchableOpacity style={styles.addAvatarButton}>
            <Image
              source={require("../../assets/images/add.png")}
              style={styles.addAvatarIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeLogin}
            value={login}
            placeholder="Логін"
            inputMode="text"
            maxLength={20}
            autoFocus={false}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Адреса електронної пошти"
            inputMode="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            maxLength={20}
          />
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Пароль"
              textContentType="password"
              maxLength={20}
              secureTextEntry
            />
            <TouchableOpacity style={styles.rightPasswordInputButton}>
              <Text style={styles.rightPasswordInputButtonText}>Показати</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>

            <View style={styles.secondaryButton}>
              <Text style={styles.text}>Вже є акаунт?</Text>
              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.text}>Увійти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default RegistrationScreen;
