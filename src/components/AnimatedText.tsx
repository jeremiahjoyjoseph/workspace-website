"use client";

import React, {
  ReactNode,
  isValidElement,
  cloneElement,
  Fragment,
  ReactElement,
} from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
}

interface ElementProps {
  className?: string;
  children?: ReactNode;
  [key: string]: string | number | boolean | ReactNode | undefined;
}

const AnimatedText = ({ children, className = "" }: AnimatedTextProps) => {
  const renderText = (text: string) => {
    return text.split(" ").map((word, wordIndex) => (
      <span
        key={wordIndex}
        className="inline-block transition-transform duration-300 hover:translate-y-[-4px] hover:text-[#ffcf4b]"
        style={{ transitionDelay: `${wordIndex * 50}ms` }}
      >
        {word}
        {wordIndex < text.split(" ").length - 1 ? "\u00A0" : ""}
      </span>
    ));
  };

  const processNode = (node: ReactNode): ReactNode => {
    if (typeof node === "string") {
      return renderText(node);
    }

    if (isValidElement(node)) {
      const element = node as ReactElement<ElementProps>;

      if (element.type === "br") {
        return <br key={Math.random()} />;
      }

      if (element.type === "span") {
        return (
          <span key={Math.random()} className={element.props.className}>
            {processNode(element.props.children)}
          </span>
        );
      }

      return cloneElement(element, {
        ...element.props,
        children: processNode(element.props.children),
      });
    }

    if (Array.isArray(node)) {
      return node.map((child, index) => (
        <Fragment key={index}>{processNode(child)}</Fragment>
      ));
    }

    return node;
  };

  return (
    <span className={`inline-block ${className}`}>{processNode(children)}</span>
  );
};

export default AnimatedText;
