import { FC, useState } from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { images, icons } from "../../utils";
import styles from "./AvatarStyles";

type AvatarProps = {};

const Avatar: FC<AvatarProps> = () => {
  const [avatarImage, setAvatarImage] = useState<ImageSourcePropType>(
    images.avatar
  );
  const [icon, setIcon] = useState(icons.add);

  const handleAvatarChange = () => {
    if (icon === icons.add) {
      setIcon(icons.remove);
      setAvatarImage(images.avatar);
    } else {
      setIcon(icons.add);
      setAvatarImage(images.girl);
    }
  };

  return (
    <View style={styles.avatarContainer}>
      <Image source={avatarImage} style={styles.image} />
      <Button
        iconUri={icon}
        buttonStyle={styles.addAvatarButton}
        onPress={handleAvatarChange}
      />
    </View>
  );
};

export default Avatar;
