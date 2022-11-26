import type { FC, ReactNode } from 'react';

type ConditionalWrapperProps = {
  children: ReactNode;
  condition?: boolean;
  fallback?: ReactNode;
};

const ConditionalWrapper: FC<ConditionalWrapperProps> = ({
  children,
  condition,
  fallback,
}) => {
  if (condition) {
    return <>{children}</>;
  }

  if (fallback) {
    return <>{fallback}</>;
  }

  return null;
};

export default ConditionalWrapper;
