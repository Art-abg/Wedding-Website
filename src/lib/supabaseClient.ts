import { createClient } from '@supabase/supabase-js';

// These will be undefined during build, which is fine
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only create the client in the browser environment
import { SupabaseClient } from '@supabase/supabase-js';

let supabaseClient: SupabaseClient | null = null;

if (typeof window !== 'undefined') {
  // Client-side only code
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(`
      Missing Supabase environment variables.\n
      NEXT_PUBLIC_SUPABASE_URL: ${supabaseUrl ? '✅' : '❌'}
      NEXT_PUBLIC_SUPABASE_ANON_KEY: ${supabaseAnonKey ? '✅' : '❌'}

      Please check your Vercel project settings and ensure these variables are set:
      1. Go to your Vercel project
      2. Click on Settings > Environment Variables
      3. Add both NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
      4. Redeploy your application
    `);
    
    // Create a mock client that will throw errors when used
        supabaseClient = new Proxy({} as SupabaseClient, {
      get() {
        throw new Error('Supabase client not initialized. Check your environment variables.');
      }
    });
  } else {
    // Create the actual client with the environment variables
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }
}

export const supabase = supabaseClient;
