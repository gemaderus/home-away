'use client';
import { useState } from 'react';
import { Button } from '../ui/button';

type CommentProps = {
  comment: string;
};

const Comment = ({ comment }: CommentProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const longComment = comment.length > 130;
  const displayComment = longComment ? comment.slice(0, 130) : comment;

  return (
    <div>
      <p className="text-sm">{displayComment}</p>
      {longComment && (
        <Button onClick={toggleExpand} className="pl-0 text-muted-foreground" variant="link">
          {isExpanded ? 'Show less' : 'Show more'}
        </Button>
      )}
    </div>
  );
};

export default Comment;
