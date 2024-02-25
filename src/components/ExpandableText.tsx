import { useState } from 'react';
import Button from './Button';

interface Props {
  children: string;
  maxChar?: number;
}
const ExpandableText = ({ children, maxChar = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const newValue = isExpanded ? children : children.slice(0, maxChar);

  if (children.length < maxChar)
    return (
      <>
        <div>ExpandableText</div>
        <p>{children}</p>
      </>
    );
  return (
    <>
      <div>ExpandableText</div>
      <p>
        {newValue}...
        <Button color="secondary" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Less' : 'More'}
        </Button>
      </p>
    </>
  );
};

export default ExpandableText;
