require("../config/db_mongo"); // importa la conexión a Atlas
const Recipes = require("../models/recipes.model"); // tu modelo de recetas

// Tu seeder completo
const cookiesSeeder = [
    {
        Name: "Cookie de pistacho",
        Ingredients: ["harina", "azúcar moreno", "mantequilla", "huevo", "pistachos troceados", "extracto de vainilla"],
        Steps: [
            "Precalienta el horno a 180°C",
            "Mezcla mantequilla con azúcar hasta que esté cremoso",
            "Añade el huevo y la vainilla",
            "Incorpora la harina y los pistachos",
            "Forma bolas y hornea 12 minutos"
        ],
        Images: "https://asadorchelin.com/wp-content/uploads/2024/10/asador_chelin_cookie_pistacho2.jpg"
    },
    {
        Name: "Cookie de Nutella",
        Ingredients: ["harina", "azúcar", "mantequilla", "huevo", "Nutella", "bicarbonato"],
        Steps: [
            "Mezcla mantequilla y azúcar",
            "Añade el huevo y la harina con bicarbonato",
            "Forma bolas y rellena con Nutella",
            "Hornea 10-12 minutos"
        ],
        Images: "https://sugargeekshow.com/wp-content/uploads/2021/10/nutella_stuffed_cookies_FEATURED.jpg"
    },
    {
        Name: "Cookie de Oreo",
        Ingredients: ["harina", "azúcar", "mantequilla", "huevo", "trozos de Oreo", "vainilla"],
        Steps: [
            "Tritura las Oreo y mézclalas con la masa base",
            "Forma bolas y colócalas en la bandeja",
            "Hornea 12 minutos y deja enfriar"
        ],
        Images: "https://thecookiedoughdiaries.com/wp-content/uploads/2022/08/oreo-chocolate-chip-cookies-featured.jpg"
    },
    {
        Name: "Cookie de chocolate blanco",
        Ingredients: ["harina", "azúcar moreno", "mantequilla", "huevo", "chips de chocolate blanco"],
        Steps: [
            "Mezcla los ingredientes secos",
            "Añade mantequilla y huevo",
            "Incorpora los chips",
            "Hornea 10 minutos"
        ],
        Images: "https://unablogueraenlacocina.es/storage/2020/04/Cookies-de-Chocolate-Blanco-1300x975.jpg"
    },
    {
        Name: "Cookie de chocolate",
        Ingredients: ["harina", "cacao en polvo", "azúcar", "mantequilla", "huevo", "chips de chocolate negro"],
        Steps: [
            "Mezcla mantequilla con azúcar",
            "Añade huevo, cacao y harina",
            "Agrega chips y hornea 12 minutos"
        ],
        Images: "https://static.carrefour.es/hd_510x_/img_pim_food/313703_00_1.jpg"
    },
    {
        Name: "Cookie de mantequilla de cacahuete",
        Ingredients: ["harina", "azúcar moreno", "mantequilla de cacahuete", "huevo", "bicarbonato"],
        Steps: [
            "Mezcla todos los ingredientes",
            "Forma bolas y aplástalas ligeramente",
            "Hornea 10 minutos"
        ],
        Images: "https://leitesculinaria.com/wp-content/uploads/2023/11/chocolate-peanut-butter-cookies-1200.jpg"
    },
    {
        Name: "Cookie de Happy Hippo",
        Ingredients: ["harina", "azúcar", "mantequilla", "huevo", "trozos de Happy Hippo", "vainilla"],
        Steps: [
            "Prepara la masa base",
            "Incorpora los trozos de Happy Hippo",
            "Hornea 12 minutos y deja enfriar"
        ],
        Images: "https://eatcookbake.com/wp-content/uploads/2024/01/kinder-cookies-with-hippo-and-chocolate-pieces-on-top.jpg"
    },
    {
        Name: "Cookie de Emmanems",
        Ingredients: ["harina", "azúcar", "mantequilla", "huevo", "Emmanems", "bicarbonato"],
        Steps: [
            "Mezcla mantequilla y azúcar",
            "Añade huevo y harina con bicarbonato",
            "Agrega Emmanems y hornea 10 minutos"
        ],
        Images: "https://www.rachelcooks.com/wp-content/uploads/2022/03/Perfect-MM-Cookies-Images025-web-square.jpg"
    },
    {
        Name: "Cookie de Kinder Bueno",
        Ingredients: ["harina", "azúcar moreno", "mantequilla", "huevo", "trozos de Kinder Bueno"],
        Steps: [
            "Mezcla los ingredientes base",
            "Incorpora los trozos de Kinder",
            "Hornea 12 minutos"
        ],
        Images: "https://mysimpleeats.co.uk/wp-content/uploads/2023/01/Kinder-Bueno-cookies-2-scaled.jpg"
    },
    {
        Name: "Cookie de Lotus",
        Ingredients: ["harina", "azúcar", "mantequilla", "huevo", "crema Lotus", "canela"],
        Steps: [
            "Mezcla mantequilla con azúcar y huevo",
            "Añade harina y canela",
            "Rellena con crema Lotus y hornea"
        ],
        Images: "https://www.latortista.es/wp-content/uploads/2023/08/PhotoRoom-20230811_113553.png"
    }
];

// Función para borrar y volver a insertar
const seedCookies = async () => {
    try {
        console.log("🗑️ Borrando recetas anteriores...");
        await Recipes.deleteMany({});

        console.log("🍪 Insertando nuevas cookies...");
        await Recipes.insertMany(cookiesSeeder);

        console.log("✅ Cookies insertadas correctamente");
        process.exit();
    } catch (error) {
        console.error("❌ Error insertando cookies:", error);
        process.exit(1);
    }
};

// Ejecutar el seeder
seedCookies();

