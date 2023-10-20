interface Pokemon {
    abilities: {
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }[];
    base_experience: number;
    forms: {
        name: string;
        url: string;
    }[];
    game_indices: {
        game_index: number;
        version: {
            name: string;
            url: string;
        };
    }[];
    height: number;
    held_items: any[]; // You can define an interface for held items if needed
    id: number;
    is_default: boolean;
    url: string;
    location_area_encounters: string;
    moves: {
        move: {
            name: string;
            url: string;
        };
        version_group_details: {
            level_learned_at: number;
            move_learn_method: {
                name: string;
                url: string;
            };
            version_group: {
                name: string;
                url: string;
            };
        }[];
    }[];
    name: string;
    order: number;
    past_abilities: any[]; // You can define an interface for past abilities if needed
    past_types: any[]; // You can define an interface for past types if needed
    types: any[]; // You can define an interface for past types if needed
    species: {
        name: string;
        url: string;
    };
    sprites: {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
        other: {
            dream_world: {
                front_default: string;
                front_female: string | null;
            };
            official_artwork: {
                front_default: string;
            };
        };
        versions: {
            'generation-i': {
                'red-blue': {
                    back_default: string;
                    back_gray: string;
                    front_default: string;
                    front_gray: string;
                };
                yellow: {
                    back_default: string;
                    back_gray: string;
                    front_default: string;
                    front_gray: string;
                };
            };
            'generation-ii': {
                crystal: {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                };
                gold: {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                };
                silver: {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                };
            };
            'generation-iii': {
                emerald: {
                    front_default: string;
                    front_shiny: string;
                };
                'firered-leafgreen': {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                };
                'ruby-sapphire': {
                    back_default: string;
                    back_shiny: string;
                    front_default: string;
                    front_shiny: string;
                };
            };
            'generation-iv': {
                'diamond-pearl': {
                    back_default: string;
                    back_female: string | null;
                    back_shiny: string;
                    back_shiny_female: string | null;
                    front_default: string;
                    front_female: string | null;
                    front_shiny: string;
                    front_shiny_female: string | null;
                };
                heartgold: {
                    back_default: string;
                    back_female: string | null;
                    back_shiny: string;
                    back_shiny_female: string | null;
                    front_default: string;
                    front_female: string | null;
                    front_shiny: string;
                    front_shiny_female: string | null;
                };
                soulsilver: {
                    back_default: string;
                    back_female: string | null;
                    back_shiny: string;
                    back_shiny_female: string | null;
                    front_default: string;
                    front_female: string | null;
                    front_shiny: string;
                    front_shiny_female: string | null;
                };
            };
            'generation-v': {
                'black-white': {
                    back_default: string;
                    back_female: string | null;
                    back_shiny: string;
                    back_shiny_female: string | null;
                    front_default: string;
                    front_female: string | null;
                    front_shiny: string
                }
            }
        }
    }
}