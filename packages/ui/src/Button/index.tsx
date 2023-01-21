import { ComponentProps } from 'react';

type Props = ComponentProps<'button'>;

export const Button = (props: Props) => {
  return <button {...props} />;
};
