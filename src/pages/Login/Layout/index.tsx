export interface LoginProps {
  loading: boolean
  onSubmit: () => Promise<void>
  onSignUp: () => Promise<void>
}
function LoginLayout({ loading, onSubmit, onSignUp }: LoginProps) {
  return (
    <div>
      <button onClick={onSubmit} disabled={loading}>Login</button>
      <button onClick={onSignUp}>Cadastro</button>
    </div>
  )
}

export default LoginLayout
