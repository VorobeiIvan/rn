import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  contentContainer: {
    height: "66%",
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    backgroundColor: colors.white,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: colors.light_gray,
    alignSelf: "center",
    marginTop: -60,
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  addAvatarButton: {},
});

export default styles;
