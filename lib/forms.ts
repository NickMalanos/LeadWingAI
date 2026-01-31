export type FormErrors<T> = Partial<Record<keyof T, string>>;

export const validateRequired = (value: string) =>
  value.trim().length === 0 ? "This field is required." : "";

export const validateEmail = (value: string) =>
  /.+@.+\..+/.test(value) ? "" : "Enter a valid email.";

export const validatePhone = (value: string) =>
  /[0-9\s()+-]{8,}/.test(value) ? "" : "Enter a valid phone number.";

export const mockSubmit = async (payload: unknown) => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { ok: true, payload };
};
