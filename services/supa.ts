import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://efkidldlqermevojkwle.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma2lkbGRscWVybWV2b2prd2xlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg5ODgwNTEsImV4cCI6MjA5NDU2NDA1MX0.So7LkuWPwmkq_cbbWXoY_jRSDD0szk2rnOTSE_n3zYg";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);