import { act, render, screen, waitFor } from "@__tests__/utils/customRender";

import { Routes } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";
import { api } from "@services/api";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";

const mockCity: CityProps = {
  id: '1',
  name: 'São Paulo',
  latitude: 123,
  longitude: 123,
}

describe("Routes", () => {
  it("should be render search screen when not have a city selected", async () => {
    render(<Routes />);
    
    const title = await waitFor(() => screen.findByText(/^escolha um local/i));
    expect(title).toBeTruthy();
  });

  it("should be render Dashboard screen when has a city selected", async () => {
    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse });
    await saveStorageCity(mockCity);

    await act(() => waitFor(() => render(<Routes />)));

    const title = screen.getByText(mockCity.name);
    expect(title).toBeTruthy();
  });
});