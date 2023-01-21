import type { ComponentProps } from 'react';

type Props = ComponentProps<'button'>;

export const Button = (props: Props) => {
  return (
    <button
      className="ui_text-white ui_bg-teal-800 ui_font-bold ui_rounded-md ui_shadow-md hover:ui_shadow-sm ui_transition-shadow"
      {...props}
    />
  );
};
