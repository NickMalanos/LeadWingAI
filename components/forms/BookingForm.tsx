"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import {
  FormErrors,
  validateEmail,
  validatePhone,
  validateRequired
} from "@/lib/forms";

type BookingValues = {
  name: string;
  business: string;
  phone: string;
  email: string;
  trade: string;
  suburb: string;
  website: string;
  message: string;
};

const initialValues: BookingValues = {
  name: "",
  business: "",
  phone: "",
  email: "",
  trade: "",
  suburb: "",
  website: "",
  message: ""
};

const tradeOptions = [
  "Plumber",
  "Electrician",
  "Landscaper",
  "Roofer",
  "Other service business"
];

export default function BookingForm() {
  const [values, setValues] = useState<BookingValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors<BookingValues>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [botField, setBotField] = useState("");

  const handleChange = (key: keyof BookingValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (botField.trim()) {
      setSubmitted(true);
      return;
    }

    const nextErrors: FormErrors<BookingValues> = {
      name: validateRequired(values.name),
      business: validateRequired(values.business),
      phone: validatePhone(values.phone),
      email: validateEmail(values.email),
      trade: validateRequired(values.trade),
      suburb: validateRequired(values.suburb),
      message: validateRequired(values.message)
    };

    const hasErrors = Object.values(nextErrors).some((error) => error);
    setErrors(nextErrors);
    if (hasErrors) {
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/free-trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}));
        setErrorMessage(
          payload?.error || "Something went wrong. Please try again."
        );
        return;
      }

      setSubmitted(true);
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald/30 bg-emerald/10 p-6">
        <p className="text-lg font-semibold text-emerald-900">
          Discovery call request received.
        </p>
        <p className="mt-2 text-sm text-emerald-900/80">
          We will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="hidden">
        Company
        <input
          value={botField}
          onChange={(event) => setBotField(event.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </label>
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
          Business name*
          <input
            value={values.business}
            onChange={(event) => handleChange("business", event.target.value)}
            className="rounded-xl border border-steel/20 px-4 py-3 text-sm"
            placeholder="Taylor Plumbing Co."
          />
          {errors.business && (
            <span className="text-xs text-red-600">{errors.business}</span>
          )}
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
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate">
          Trade type*
          <select
            value={values.trade}
            onChange={(event) => handleChange("trade", event.target.value)}
            className="rounded-xl border border-steel/20 px-4 py-3 text-sm"
          >
            <option value="">Select</option>
            {tradeOptions.map((trade) => (
              <option key={trade} value={trade}>
                {trade}
              </option>
            ))}
          </select>
          {errors.trade && (
            <span className="text-xs text-red-600">{errors.trade}</span>
          )}
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate">
          Town / Suburb*
          <input
            value={values.suburb}
            onChange={(event) => handleChange("suburb", event.target.value)}
            className="rounded-xl border border-steel/20 px-4 py-3 text-sm"
            placeholder="Parramatta"
          />
          {errors.suburb && (
            <span className="text-xs text-red-600">{errors.suburb}</span>
          )}
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate">
        Website URL (optional)
        <input
          value={values.website}
          onChange={(event) => handleChange("website", event.target.value)}
          className="rounded-xl border border-steel/20 px-4 py-3 text-sm"
          placeholder="https://yourwebsite.com.au"
        />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate">
        Tell us about your lead flow*
        <textarea
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className="min-h-[120px] rounded-xl border border-steel/20 px-4 py-3 text-sm"
          placeholder="We miss after-hours calls and want bookings on weekends."
        />
        {errors.message && (
          <span className="text-xs text-red-600">{errors.message}</span>
        )}
      </label>
      {errorMessage && (
        <p className="text-sm font-semibold text-red-600">{errorMessage}</p>
      )}
      <div className="flex items-center gap-3">
        <Button type="submit" className="bg-ink text-white">
          {submitting ? "Booking..." : "Confirm Booking"}
        </Button>
      </div>
    </form>
  );
}
