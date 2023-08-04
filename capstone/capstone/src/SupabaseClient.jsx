import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wkhnucewfvriyhqbjhbi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndraG51Y2V3ZnZyaXlocWJqaGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4ODkyMjQsImV4cCI6MjAwNjQ2NTIyNH0.S3rw8WGpqptOykyXMlr4WLLaQunoD8PiuFzWQG641f4'

const supabase = createClient(supabaseUrl, supabaseKey, { realtime: true });

export default supabase

