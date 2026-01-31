const {createClient}=require ("@supabase/supabase-js");

const supabase=createClient(
    process.env.SUPABSE_URL,
    process.env.SUPABASE_KEY
);

module.exports=supabase;





