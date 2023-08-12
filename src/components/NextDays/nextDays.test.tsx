import { render, screen } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";

import clearDay from '@assets/clear_day.svg';

describe("Component: NextDays", () => {
  it("should be render days", () => {
    render(
      <NextDays 
        data={[
          {
            day: '18/07',
            min: '30°c',
            max: '34°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '19/07',
            min: '30°c',
            max: '34°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '20/07',
            min: '30°c',
            max: '34°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '21/07',
            min: '30°c',
            max: '34°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
          {
            day: '22/07',
            min: '30°c',
            max: '34°c',
            icon: clearDay,
            weather: 'Céu limpo',
          },
        ]}
      />
    );
    
    expect(screen.getByText('21/07')).toBeTruthy()
  });
});