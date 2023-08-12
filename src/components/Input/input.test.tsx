import { render, screen } from '@testing-library/react-native';

import { Input } from '@components/Input';

describe("Component: Input", () => {
  it("should be render without activity indicator", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId('activity-indicator');
    expect(activityIndicator).toBeNull();
  });

  it("should be render with activity indicator", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId('activity-indicator');
    expect(activityIndicator).toBeTruthy();
  });
});