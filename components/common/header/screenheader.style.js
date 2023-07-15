import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.small / 0.9,
    justifyContent: "center",
    alignItems: "center",
    margin:8
  },
  btnImg: (dimension) => ({
    // width: dimension,
    // height: dimension,
    width:"90%",
    height:"90%",
    borderRadius: SIZES.small /0.9,
  }),
});

export default styles;
