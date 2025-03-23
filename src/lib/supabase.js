import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Prueba de conexión: Obtiene los libros de la base de datos
async function testConnection() {
    const { data, error } = await supabase.from('libros').select('*');
    
    if (error) {
        console.error('Error conectando a Supabase:', error.message);
    } else {
        console.log('Conexión exitosa. Datos obtenidos:', data);
    }
}

// Llamando a la prueba de conexión al cargar el archivo
testConnection();
