import { useState } from "react";
import { Text, View } from "react-native";
import styles from "./FormStyles";
import Input from "../Input/Input";
import Button from "../Button/Button";

const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (value: string) => {
      setter(value);
    };

  const onChangeLogin = handleInputChange(setLogin);
  const onChangeEmail = handleInputChange(setEmail);
  const onChangePassword = handleInputChange(setPassword);

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };
  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegistration = async () => {
    if (!login || !email || !password) {
      console.log("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(email)) {
      console.log("Invalid email format.");
      return;
    }
    // TODO: Implement login
    try {
      console.log("Registering:", { login, email, password });
      // TODO: Implement login
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const handleAuthorization = () => {
    console.log("Прехід на сторінку авторизації");
    // TODO: Implement login
  };

  return (
    <View style={styles.inputContainer}>
      <Input
        onTextChange={onChangeLogin}
        value={login}
        placeholder="Логін"
        inputMode="text"
        maxLength={20}
        outerStyles={styles.text}
        autofocus={true}
      />
      <Input
        onTextChange={onChangeEmail}
        value={email}
        placeholder="Адреса електронної пошти"
        inputMode="email"
        maxLength={20}
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <View style={styles.passwordInputContainer}>
        <Input
          onTextChange={onChangePassword}
          value={password}
          placeholder="Пароль"
          textContentType="password"
          maxLength={20}
          secureTextEntry={!passwordVisible}
        />
        <Button
          text={passwordVisible ? "Cховати" : "Показати"}
          buttonStyle={styles.togglePasswordVisibleButton}
          onPress={togglePasswordVisible}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text={"Зареєстуватися"}
          buttonStyle={styles.primaryButton}
          onPress={handleRegistration}
        />
        <View style={styles.secondaryButton}>
          <Text style={styles.text}>Вже є акаунт?</Text>
          <Button
            text={"Увійти"}
            buttonStyle={styles.secondaryButton}
            onPress={handleAuthorization}
          />
        </View>
      </View>
    </View>
  );
};

export default RegistrationForm;
