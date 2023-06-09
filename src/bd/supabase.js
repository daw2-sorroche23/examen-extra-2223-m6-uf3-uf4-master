import { createClient } from '@supabase/supabase-js'

// Conexión con supabase
// Estamos diciendo la url donde estara nuestra base de datos
const supabaseUrl = 'https://cqzrgfsoopnnfcfyklua.supabase.co'

// const supabaseKey = process.env.SUPABASE_KEY
// contraseña de base de datos
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxenJnZnNvb3BubmZjZnlrbHVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYzMTgwNTUsImV4cCI6MjAwMTg5NDA1NX0.TanputhraX98yZMzFtZm5RK6mQle13QuLwYFcq-kjV8'

// conexion a la base de datos
export const supabase = createClient(supabaseUrl, supabaseKey)
