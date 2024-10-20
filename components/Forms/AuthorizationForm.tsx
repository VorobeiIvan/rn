import { useState } from "react";
import { Text, View } from "react-native";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./FormStyles";

const AuthorizationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (value: string) => {
      setter(value);
    };

  const onChangeEmail = handleInputChange(setEmail);
  const onChangePassword = handleInputChange(setPassword);

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegistration = async () => {
    console.log("Прехід на сторінку реєстрації");
    // TODO: Implement login
  };

  const handleAuthorization = () => {
    console.log("Авторизація", { email, password });
    // TODO: Implement login
  };

  return (
    <View style={styles.inputContainer}>
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
          text={"Увійти"}
          buttonStyle={styles.primaryButton}
          onPress={handleAuthorization}
        />
        <View style={styles.secondaryButton}>
          <Text style={styles.text}>Немає акаунту? </Text>
          <Button
            text={"Зареєструватися"}
            buttonStyle={styles.secondaryButton}
            onPress={handleRegistration}
          />
        </View>
      </View>
    </View>
  );
};

export default AuthorizationForm;
