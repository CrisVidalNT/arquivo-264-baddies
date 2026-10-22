export default function ActionButton({ children, variant = 'primary', className = '', ...props }) {
  return <button className={`action-button action-button--${variant} ${className}`} {...props}>{children}</button>;
}
