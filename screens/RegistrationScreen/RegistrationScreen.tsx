import { Image, TouchableOpacity, View } from "react-native";
import styles from "./RegistrationScreenStyles";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/bg.png")}
        style={styles.imageBackground}
      />
      <View style={styles.contentContainer}>
        <View style={styles.avatarContainer}>
          {/* <Image
              source={require("../../assets/images/girl.png")}
              style={styles.avatar}
            /> */}
        </View>
        <TouchableOpacity style={styles.addAvatarButton}>
          <Image source={require("../../assets/icons/add.svg")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RegistrationScreen;
