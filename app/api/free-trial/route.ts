import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import sgMail from "@sendgrid/mail";

export const runtime = "nodejs";

type LeadPayload = {
  name: string;
  business: string;
  phone: string;
  email: string;
  trade: string;
  suburb: string;
  website?: string;
  message: string;
};

const requiredFields: Array<keyof LeadPayload> = [
  "name",
  "business",
  "phone",
  "email",
  "trade",
  "suburb",
  "message"
];

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<LeadPayload>;
  const missing = requiredFields.filter(
    (field) => !payload?.[field]?.toString().trim()
  );

  if (missing.length > 0) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const sendGridKey = process.env.SENDGRID_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;
  const fromEmail = process.env.FROM_EMAIL;

  if (
    !supabaseUrl ||
    !supabaseServiceKey ||
    !sendGridKey ||
    !notifyEmail ||
    !fromEmail
  ) {
    return NextResponse.json(
      { error: "Server configuration is incomplete." },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false }
  });

  const { error: insertError } = await supabase
    .from("free_trial_leads")
    .insert({
      name: payload.name,
      business: payload.business,
      phone: payload.phone,
      email: payload.email,
      trade: payload.trade,
      suburb: payload.suburb,
      website: payload.website || null,
      message: payload.message
    });

  if (insertError) {
    return NextResponse.json(
      { error: "Could not save lead. Please try again." },
      { status: 500 }
    );
  }

  sgMail.setApiKey(sendGridKey);

  const emailBody = [
    `Name: ${payload.name}`,
    `Business: ${payload.business}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Trade: ${payload.trade}`,
    `Suburb: ${payload.suburb}`,
    `Website: ${payload.website || "N/A"}`,
    `Message: ${payload.message}`
  ].join("\n");

  try {
    await sgMail.send({
      to: notifyEmail,
      from: fromEmail,
      subject: "New Free Trial Lead",
      text: emailBody
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Lead saved but email failed. Please contact us." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
