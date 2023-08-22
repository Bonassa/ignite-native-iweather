import { act, renderHook, waitFor } from '@testing-library/react-native';

import { useCity } from '@hooks/useCity';
import { CityProvider } from '@contexts/CityContext';
import { CityProps } from '@services/getCityByNameService';

const mockCity: CityProps = {
  id: '1',
  name: 'São Paulo',
  latitude: 123,
  longitude: 123,
}

describe("Context: CityContext", () => {
  it("should be change selected city", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    await waitFor(() => act(() => result.current.handleChanceCity(mockCity)));

    expect(result.current.city).toBe(mockCity);
  });
});