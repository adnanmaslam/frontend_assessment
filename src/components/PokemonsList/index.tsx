import React from "react";
import {
  TextField,
  accordionActionsClasses,
  accordionClasses,
  accordionDetailsClasses,
  accordionSummaryClasses,
  Accordion,
  AccordionActions,
  AccordionDetails,
  Typography,
  AccordionSummary,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// interface PokemonProps={pokemons:[],expanded:number ,handleChange:any}
function PokemonsList({ pokemons, expanded, handleChange }: any) {
  return (
    <div className="pokemon-list-container">
      <Accordion expanded={expanded === 0} onChange={() => handleChange(0)}>
        <AccordionSummary focusRipple expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 1} onChange={() => handleChange(1)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default PokemonsList;
