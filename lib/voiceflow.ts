export function openVoiceflow() {
  if (
    typeof window !== "undefined" &&
    window.voiceflow?.chat?.open
  ) {
    window.voiceflow.chat.open();
  }
}
