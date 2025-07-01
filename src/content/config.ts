import { defineCollection, z } from "astro:content";

const experiences = defineCollection({
    type: "content",
    schema: z.object({
        title : z.string(),
        description : z.string(),
        technologies : z.array(z.string()),
        technologies_icons : z.array(z.string()).optional(),
        images : z.array(z.string()).optional(),
        date : z.string().optional()
    })
})

export const collections ={
    experiences
}