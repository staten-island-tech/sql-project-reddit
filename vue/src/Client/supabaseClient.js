import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ojicgoelwrzjlenrsaog.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qaWNnb2Vsd3J6amxlbnJzYW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyNjUxNzgsImV4cCI6MjAwMTg0MTE3OH0.yG42VCWlrE5pGQw-IeU5Ed67YEVLrjkoi0u3DKVs1Ig'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }
