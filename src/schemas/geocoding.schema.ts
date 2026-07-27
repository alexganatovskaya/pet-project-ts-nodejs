import { z } from 'zod';

export const CitySchema = z.object({
    id: z.number(),
    name: z.string(),
    latitude: z.number(),
    longitude: z.number()
});