import { Button } from '@ui';

export default function Page() {
  return (
    <>
      <h1>Hello world</h1>
      <Button type='button' onClick={() => alert('Hello!')}>
        Hello
      </Button>
    </>
  );
}
