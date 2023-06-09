import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rykeyinikrtdtluvcoau.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5a2V5aW5pa3J0ZHRsdXZjb2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MzczMjcsImV4cCI6MTk5OTMxMzMyN30.sOjX-LMHAEarcnceaHm75RD1SrprJPoG2awrSl0qqZk'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }
