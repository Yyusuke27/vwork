import React from "react";
import Color from "../../shared/util/color";
import Typography from "@material-ui/core/Typography";

const StepFinish = () => {
  return (
    <>
      <Typography>
        <span style={{ fontSize: 40, color: Color.VWORK_RED }}>VWORK</span>
        の設定は完了しました。
      </Typography>
    </>
  );
};

export default StepFinish;
