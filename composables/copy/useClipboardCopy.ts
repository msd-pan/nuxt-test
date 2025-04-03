export const useClipboardCopy = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    console.log("copied", text);
  };
  return { copyToClipboard };
};
