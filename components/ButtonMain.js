import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";


const ButtonMain = ({
  title,
  borderColor = '#151542',
  backgroundColor = '#151542',
  titleColor = "#fff",
  titleSize = 14,
  onPress,
  width = "100%",
  containerStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={(args) => {
        if (args.pressed) {
          return [
            styles.base,
            {
              opacity: 0.5,
              backgroundColor,
              borderColor,
              width,
            },
            containerStyle,
          ];
        }

        return [
          styles.base,
          {
            opacity: 1,
            backgroundColor,
            borderColor,
            width,
          },
          containerStyle,
        ];
      }}
    >
      <Text style={[styles.text, { color: titleColor, fontSize: titleSize }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
  },
  base: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
    paddingHorizontal: 12,
  },

});

export default ButtonMain;
