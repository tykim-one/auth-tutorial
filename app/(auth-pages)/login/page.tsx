
import SocialLoginButton from "@/components/tutorial/socialLogin"


const Login = () => {
  return (
    <div>
      <h1>로그인</h1>
      <SocialLoginButton provider="google" />
      <SocialLoginButton provider="github" />
      {/* 필요한 다른 제공자도 추가 */}
    </div>
  )
}

export default Login