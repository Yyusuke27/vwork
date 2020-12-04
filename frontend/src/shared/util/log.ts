const TASK_STATE = ["TODO", "進行中", "完了"];
const TASK_PRIORITY = ["低", "中", "高"];

export const outputLog = (
  type: number,
  oldState: string | number,
  newState: string | number
) => {
  switch (type) {
    case 0:
      return `[新規]${newState}`;
    case 1:
      return `[タスク名]${
        oldState ? `「${oldState}」を` : ""
      }「${newState}」に変更しました`;
    case 2:
      return `[詳細]${
        oldState ? `「${oldState}」を` : ""
      }「${newState}」に変更しました`;
    case 3:
      return `[開始日]${
        oldState ? `「${oldState}」を` : ""
      }「${newState}」に変更しました`;
    case 4:
      return `[終了日]${
        oldState ? `「${oldState}」を` : ""
      }「${newState}」に変更しました`;
    case 5:
      return `[タスク状況]「${TASK_STATE[Number(oldState)]}」を「${
        TASK_STATE[Number(newState)]
      }」に変更しました`;
    case 6:
      return `[進捗]${
        oldState ? `「${oldState}」を` : ""
      }「${newState}」に変更しました`;
    case 7:
      return `[優先度]「${TASK_PRIORITY[Number(oldState)]}」を「${
        TASK_PRIORITY[Number(newState)]
      }」に変更しました`;
    case 8:
      return `[今日のタスク]${
        newState === "true"
          ? "今日のタスクに設定しました"
          : "今日のタスクから外しました"
      }`;
    case 9:
      return `プロジェクトが変更されました`;
    case 10:
        return "担当者が変更されました。";
  }
};
