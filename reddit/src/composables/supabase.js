// UseSupabase.js
import { createClient } from '@supabase/supabase-js'

// these can come from an environment variable if desired
// not required however as they are 100% exposed on the client side anyway
// and that's ok, Supabase expects this (security is provided by Row Level Security)
const supabaseUrl = 'https://epxetgstlknrdacnxswy.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVweGV0Z3N0bGtucmRhY254c3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3NDEyMzQsImV4cCI6MTk5OTMxNzIzNH0.vJSlWpAy8_O1QG6qRXRlcX_I1DgHQW5Pltav4zti12Y'

// setup client
const supabase = createClient(supabaseUrl, supabaseKey)

// expose supabase client
export default function useSupabase() {
  return { supabase }
}
