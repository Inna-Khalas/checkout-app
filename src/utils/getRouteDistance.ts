export const getRouteDistance = async (
  locations: string[]
): Promise<number> => {
  const apiKey = process.env.NEXT_PUBLIC_ORS_API_KEY;

  const coords: number[][] = [];

  for (const location of locations) {
    if (!location || location.trim() === "" || location === ":") {
      throw new Error(`Некоректна адреса: "${location}"`);
    }

    const geoRes = await fetch(
      `https://api.openrouteservice.org/geocode/search?api_key=${apiKey}&text=${encodeURIComponent(
        location
      )}`
    );

    const geoData = await geoRes.json();

    if (!geoData.features?.length) {
      throw new Error(`Не вдалося знайти координати для "${location}"`);
    }

    const [lon, lat] = geoData.features[0].geometry.coordinates;
    coords.push([lon, lat]);
  }

  if (coords.length < 2) {
    throw new Error("Необхідно вказати мінімум 2 дійсні точки маршруту");
  }

  const routeRes = await fetch(
    `https://api.openrouteservice.org/v2/directions/driving-car/geojson`,
    {
      method: "POST",
      headers: {
        Authorization: apiKey!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ coordinates: coords }),
    }
  );

  const routeData = await routeRes.json();

  const meters = routeData.features?.[0]?.properties?.summary?.distance;

  if (!meters) {
    throw new Error("Не вдалося визначити відстань маршруту");
  }

  return meters / 1000;
};
