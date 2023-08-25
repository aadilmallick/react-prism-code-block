import * as React from 'react';
import './prism.css';
import './prism';
import './index.css';

export interface PrismCodeBlockProps
  extends React.HTMLAttributes<HTMLDivElement> {
  language?: string;
}

// Delete me
export const PrismCodeBlock = ({
  children,
  language,
  className,
  ...props
}: PrismCodeBlockProps) => {
  return (
    <div className={`coding-block ${className || ''}`} {...props}>
      <pre>
        <code className={`language-${language || ''}`}>{children}</code>
      </pre>
    </div>
  );
};
