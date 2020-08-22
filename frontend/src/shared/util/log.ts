const TASK_STATE = ["TODO", "進行中", "完了"];
const TASK_PRIORITY = ["低", "中", "高"];

export const outputLog = (
  type: string,
  oldState: string | number,
  newState: string | number
) => {
  switch (type) {
    case "create":
      return `[新規]${newState}`;
    case "name":
      return `[タスク名]${
        oldState ? `「${oldState}」を` : ""
      }「${newState}」に変更しました`;
    case "description":
      return `[詳細]${
        oldState ? `「${oldState}」を` : ""
      }「${newState}」に変更しました`;
    case "user":
      return "担当者が変更されました。";
    case "startDateAt":
      return `[開始日]${
        oldState ? `「${oldState}」を` : ""
      }「${newState}」に変更しました`;
    case "endDateAt":
      return `[終了日]${
        oldState ? `「${oldState}」を` : ""
      }「${newState}」に変更しました`;
    case "state":
      return `[タスク状況]「${TASK_STATE[Number(oldState)]}」を「${
        TASK_STATE[Number(newState)]
      }」に変更しました`;
    case "progress":
      return `[進捗]${
        oldState ? `「${oldState}」を` : ""
      }「${newState}」に変更しました`;
    case "priority":
      return `[優先度]「${TASK_PRIORITY[Number(oldState)]}」を「${
        TASK_PRIORITY[Number(newState)]
      }」に変更しました`;
    case "todaysTask":
      return `[今日のタスク]${
        newState === "true"
          ? "今日のタスクに設定しました"
          : "今日のタスクから外しました"
      }`;
    case "project":
      return `プロジェクトが変更されました`;
  }
};
