import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);

  const origin = requestUrl.origin;
  const redirectTo = requestUrl.searchParams.get("redirect_to")?.toString();
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  // console.log(requestUrl)
  if (code) {
    const supabase = createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }
  if (redirectTo) {
    return NextResponse.redirect(`/login`);
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}`);
}
