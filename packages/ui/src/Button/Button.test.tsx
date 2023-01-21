import { render } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('正しく表示されること', () => {
    const { getByRole, asFragment } = render(
      <Button type="button">送信</Button>,
    );

    expect(getByRole('button', { name: '送信' })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
