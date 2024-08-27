export default function Button({ children, textOnly, className, ...props }) {
  const cssStyles = textOnly
    ? `text-button ${className}`
    : `button ${className}`;

  return (
    <button className={cssStyles} {...props}>
      {children}
    </button>
  );
}
