import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <p>Inside card</p>
      </Card>
    );
    expect(screen.getByText('Inside card')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Card className="custom-class">
        <p>Styled card</p>
      </Card>
    );
    const card = screen.getByText('Styled card').parentElement;
    expect(card?.className).toContain('custom-class');
    expect(card?.className).toContain('p-6');
    expect(card?.className).toContain('bg-white');
  });
});
