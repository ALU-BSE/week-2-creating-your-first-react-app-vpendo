import React from 'react';
import './MyComponent.css';

type MyComponentProps = {
  title: string;
  text?: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ title, text = 'This is a paragraph of text within my component.' }) => {
  return (
    <div className="my-component">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default MyComponent;