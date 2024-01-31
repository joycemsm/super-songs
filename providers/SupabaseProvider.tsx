"use client";

import { Database } from "@/types_db";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

interface SupabaseProviderProps {
  children: React.ReactNode
  supabaseUrl: string;
  supabaseKey: string;
};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
  children,
  supabaseUrl,
  supabaseKey,
}) => {
  const [supabaseClient] = useState(() =>
    createClient(supabaseUrl, supabaseKey)
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  )
}

export default SupabaseProvider;