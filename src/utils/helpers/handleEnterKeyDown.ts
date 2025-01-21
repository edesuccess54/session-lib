export const HandleEnterKeyDown = (
  event: React.KeyboardEvent,
  callback: () => void
) => {
  if (event.key === "Enter") {
    event.preventDefault();
    callback();
  }
};
