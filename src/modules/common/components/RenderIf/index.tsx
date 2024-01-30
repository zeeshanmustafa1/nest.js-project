import type { Maybe } from '@/__generated__/types.d';

interface RenderIfProps {
  children: JSX.Element;
  condition:
    | boolean
    | Maybe<string>
    | undefined
    | string
    | number
    | React.ReactNode;
}

export const RenderIf: React.FC<RenderIfProps> = ({ children, condition }) =>
  condition ? children : null;
