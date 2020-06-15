export interface Notification {
  title: string,
  text: string,
  fontColor: string,
  backgroundColor: string,
}

export const newNotification: Notification = {
  text: "公告内容",
  title: "公告标题",
  fontColor: "#ff0000",
  backgroundColor: "#ffffff"
};
