'use client'

// import { supabase } from "@/lib/supabaseclient"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
const SocialLoginButton = ({ provider }: any) => {

    const supabase = createClientComponentClient()
    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
              redirectTo: `http://localhost:3000/auth/google/callback`,
            },
          });
     
    }
  
    return (
      <button onClick={handleLogin}>
        {provider}로 로그인
      </button>
    )
  }

  export default SocialLoginButton