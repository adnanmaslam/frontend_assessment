import React from "react";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  Typography,
  AccordionSummary,
  Grid,
} from "@mui/material";
import { Pokemon } from "../../intefaces/pokemon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface PokemonProps {
  pokemon: Pokemon;
  expanded: string;
  handleChange: (value: string) => void;
}
function PokemonsList({ pokemon, expanded, handleChange }: PokemonProps) {
  return (
    <Accordion
      key={pokemon.name}
      className="pokemon-list accordion"
      expanded={expanded === pokemon.name}
      onChange={() => handleChange(pokemon.name)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {pokemon.name}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>{pokemon.url}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex">
          <h4>Abilities: </h4>{" "}
          <p>
            {pokemon?.abilities
              ?.map((value) => value.ability?.name)
              .join(" , ")}
          </p>
        </div>
        <div className="flex">
          <h4>Moves: </h4>{" "}
          <p>{pokemon?.moves?.map((value) => value.move?.name).join(" , ")}</p>
        </div>
        <div className="flex">
          <h4>Species: </h4> <p>{pokemon?.species?.name}</p>
        </div>
        <div className="flex sprites">
          <h4>Sprites: </h4>
          {Object.values(pokemon.sprites || {})
            .filter((v) => typeof v == "string")
            .map((val: any) => (
              <img src={val} key={val} className="" alt="image" />
            ))}
        </div>
        <div className="flex">
          <h4>Types: </h4>{" "}
          <p>{pokemon?.types?.map((value) => value?.type?.name).join(" , ")}</p>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default PokemonsList;
