interface ButtonProps {
  children: string;
}

const LoginButton = ({ children }: ButtonProps) => (
  <button>{children}</button>
);

export default LoginButton;
