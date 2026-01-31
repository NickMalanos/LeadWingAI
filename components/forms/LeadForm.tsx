"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { FormErrors, mockSubmit, validateEmail, validatePhone, validateRequired } from "@/lib/forms";

type LeadFormValues = {
  name: string;
  business: string;
  phone: string;
  email: string;
  message: string;
};

const initialValues: LeadFormValues = {
  name: "",
  business: "",
  phone: "",
  email: "",
  message: ""
};

export default function LeadForm() {
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors<LeadFormValues>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key: keyof LeadFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors<LeadFormValues> = {
      name: validateRequired(values.name),
      phone: validatePhone(values.phone),
      email: validateEmail(values.email),
      message: validateRequired(values.message)
    };

    const hasErrors = Object.values(nextErrors).some((error) => error);
    setErrors(nextErrors);
    if (hasErrors) {
      return;
    }

    setSubmitting(true);
    await mockSubmit(values);
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald/30 bg-emerald/10 p-6">
        <p className="text-lg font-semibold text-emerald-900">
          Thanks! Your request is in.
        </p>
        <p className="mt-2 text-sm text-emerald-900/80">
          We will call you within one business day to confirm your best time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate">
          Full name*
          <input
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className="rounded-xl border border-steel/20 px-4 py-3 text-sm"
            placeholder="Sam Taylor"
          />
          {errors.name && <span className="text-xs text-red-600">{errors.name}</span>}
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate">
          Business name
          <input
            value={values.business}
            onChange={(event) => handleChange("business", event.target.value)}
            className="rounded-xl border border-steel/20 px-4 py-3 text-sm"
            placeholder="Taylor Plumbing Co."
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate">
          Phone*
          <input
            value={values.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            className="rounded-xl border border-steel/20 px-4 py-3 text-sm"
            placeholder="0400 000 000"
          />
          {errors.phone && (
            <span className="text-xs text-red-600">{errors.phone}</span>
          )}
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate">
          Email*
          <input
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className="rounded-xl border border-steel/20 px-4 py-3 text-sm"
            placeholder="you@business.com.au"
          />
          {errors.email && (
            <span className="text-xs text-red-600">{errors.email}</span>
          )}
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate">
        How can we help?*
        <textarea
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className="min-h-[120px] rounded-xl border border-steel/20 px-4 py-3 text-sm"
          placeholder="Tell us about the leads you're missing."
        />
        {errors.message && (
          <span className="text-xs text-red-600">{errors.message}</span>
        )}
      </label>
      <div className="flex items-center gap-3">
        <Button type="submit" className="bg-ink text-white">
          {submitting ? "Submitting..." : "Request a Callback"}
        </Button>
        <span className="text-xs text-slate">
          Prefer DM? Send “DEMO” on social and we will reply.
        </span>
      </div>
    </form>
  );
}
