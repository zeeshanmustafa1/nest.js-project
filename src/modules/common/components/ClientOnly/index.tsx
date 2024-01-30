import styled from '@emotion/styled';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  [index: string]: unknown;
}

export const ClientOnly = ({ children, ...delegated }: ClientOnlyProps) => {
  const ClientOnlyContainer = styled.div`
    width: inherit;
  `;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <ClientOnlyContainer {...delegated}>{children}</ClientOnlyContainer>;
};
