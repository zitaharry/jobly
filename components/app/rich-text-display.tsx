interface RichTextDisplayProps {
  content: string;
  className?: string;
}

const RichTextDisplay = ({ content, className }: RichTextDisplayProps) => {
  return (
    <div
      className={`prose-job text-sm leading-relaxed text-foreground/80 ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichTextDisplay;
