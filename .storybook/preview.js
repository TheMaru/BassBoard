import { globalStyles } from '../src/styles/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  Story => (
    <>
      <Story />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  ),
];
