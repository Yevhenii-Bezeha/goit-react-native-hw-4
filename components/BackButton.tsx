import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

type Props = {
  onPress?: () => void;
};

const BackButton: FC<Props> = ({ onPress = () => {} }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <ArrowLeftIcon />
    </TouchableOpacity>
  );
};

export default BackButton;
