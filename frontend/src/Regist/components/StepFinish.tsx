import React from "react";
import Color from "../../shared/util/color";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const StepFinish = () => {
  return (
    <>
      <Typography variant="h3">
        <span style={{ color: Color.VWORK_RED }}>VWORK</span>
        の設定は完了しました。
      </Typography>
    </>
  );
};

export default StepFinish;
