import { render, screen, fireEvent } from "@testing-library/react-native";

import { SelectList } from '@components/SelectList';
import { CityProps } from "@services/getCityByNameService";

const cityDataMock: CityProps[] = [
  {
    id: '1',
    name: 'Campinas',
    latitude: 1,
    longitude: -1
  },
  {
    id: '2',
    name: 'Dois Vizinhos',
    latitude: 2,
    longitude: -2
  },
]

describe("Component: SelectList", () => {
  it("should be return the details of selected city", () => {
    const onPress = jest.fn();

    render(
      <SelectList 
        data={cityDataMock}
        onChange={() => {}}
        onPress={onPress}
      />
    );

    const selectedCity = screen.getByText(cityDataMock[0].name);
    fireEvent.press(selectedCity);

    expect(onPress).toBeCalledWith(cityDataMock[0]);
  });

  it("shouldn't be showed options when data props is empty", () => {
    render(
      <SelectList 
        data={[]}
        onChange={() => {}}
        onPress={() => {}}
      />
    );

    const options = screen.getByTestId('options');
    expect(options.children).toHaveLength(0);
  });
});