import { StyleSheet } from "react-native";
import { colors } from "../../styles/global";
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
  addAvatarIcon: {
    width: 24,
    height: 24,
    resizeMode: "cover",
  },
  addAvatarButton: {
    position: "absolute",
    width: 24,
    height: 24,
    bottom: 14,
    right: -14,
  },
  title: {
    fontSize: 30,
    fontWeight: "medium",
    fontFamily: "Roboto-Medium",
    textAlign: "center",
    color: colors.black_primary,
    marginTop: 32,
    marginBottom: 32,
  },
  inputContainer: {
    gap: 16,
    marginHorizontal: 16,
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.black_primary,
    backgroundColor: colors.light_gray,
    borderColor: colors.border_gray,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    padding: 16,
  },
  rightPasswordInputButton: {
    position: "absolute",
    right: 0,
    justifyContent: "center",
  },
  rightPasswordInputButtonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    padding: 16,
    color: colors.blue,
  },
  passwordInputContainer: {
    position: "relative",
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    padding: 16,
    color: colors.white,
    lineHeight: 20,
  },
  primaryButton: {
    width: "100%",
    height: 50,
    backgroundColor: colors.orange,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    gap: 16,
    marginVertical: 44,
  },
  secondaryButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
