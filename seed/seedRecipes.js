require("../config/db_mongo"); // importa la conexión a Atlas
const Recipes = require("../models/recipes.model"); // tu modelo de recetas

const flavors = [
    "Chocolate",
    "Avena",
    "Coco",
    "Limón",
    "Nuez",
    "Vainilla",
    "Café",
    "Canela",
    "Mantequilla de Maní",
    "Frutos Rojos"
];

const seedRecipes = async () => {
    try {
        console.log("🗑️ Borrando recetas anteriores...");
        await Recipes.deleteMany({});

        const recipes = [];
        for (let i = 1; i <= 50; i++) {
            const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];
            recipes.push({
                Name: `Galletas de ${randomFlavor} ${i}`,  // ← coincide con el esquema
                Ingredients: [
                    "200g harina",
                    "100g mantequilla",
                    "80g azúcar",
                    "1 huevo",
                    `50g ${randomFlavor.toLowerCase()}`,
                    "1 cucharadita de esencia de vainilla"
                ],
                Steps: [
                    "Precalentar el horno a 180°C",
                    "Batir la mantequilla con el azúcar hasta que esté cremosa",
                    `Añadir el huevo y el ${randomFlavor.toLowerCase()}, mezclar bien`,
                    "Incorporar la harina poco a poco hasta formar la masa",
                    "Formar bolitas y colocarlas en una bandeja con papel de hornear",
                    "Hornear 12-15 minutos o hasta que estén doradas"
                ],
                Images: `https://placehold.co/600x400?text=Galletas+${encodeURIComponent(randomFlavor)}+${i}`
            });
        }

        await Recipes.insertMany(recipes);
        console.log("✅ 50 recetas insertadas correctamente en Mongo Atlas");
        process.exit();
    } catch (error) {
        console.error("❌ Error insertando recetas:", error);
        process.exit(1);
    }
};

seedRecipes();
