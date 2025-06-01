import { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import { RegistrationProvider, RegistrationContext } from './index';

describe('RegistrationContext', () => {
  it('provides state and dispatch to children', () => {
    const ConsumerComponent = () => {
      const context = useContext(RegistrationContext);
      return <div>Step: {context?.state.step}</div>;
    };

    render(
      <RegistrationProvider>
        <ConsumerComponent />
      </RegistrationProvider>
    );

    expect(screen.getByText(/Step: 1/)).toBeInTheDocument();
  });
});
