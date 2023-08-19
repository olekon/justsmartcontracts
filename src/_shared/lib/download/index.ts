export const download = (content: string, filename: string) => {
  var element = document.createElement("a");
  var file = new Blob([content], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  element.click();
  element.remove();
};
