import { defineCollection, z } from "astro:content";

const experiences = defineCollection({
    type: "content",
    schema: z.object({
        title : z.string(),
        description : z.string(),
        tecnologies : z.array(z.string()),
        subtecnologies : z.array(z.string()).optional(),
        images : z.array(z.string()).optional()
    })
})

export const collections ={
    experiences
}