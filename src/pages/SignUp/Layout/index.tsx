export interface SignUpProps {
  loading: boolean
  onSubmit: () => Promise<void>
  onLogin: () => Promise<void>
}
function SignUpLayout({ loading, onSubmit, onLogin }: SignUpProps) {
  return (
    <div>
      <button onClick={onSubmit} disabled={loading}>Cadastrar</button>
      <button onClick={onLogin}>Login</button>
    </div>
  )
}

export default SignUpLayout
