import type { NextSeoProps } from 'next-seo';
import { NextSeo } from 'next-seo';
import React from 'react';

export default function Page({
  children,
  ...props
}: React.PropsWithChildren<NextSeoProps>) {
  return (
    <>
      <NextSeo {...props} />
      {children}
    </>
  );
}
