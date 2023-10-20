import "./App.css";
import {
  useCallback,
  useContext,
  useDebugValue,
  useDeferredValue,
  useEffect,
  useId,
  useImperativeHandle,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useSyncExternalStore,
  useTransition,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokeDoxState } from "./store/rootReducer";
import { pokeRequest } from "./store/actions/pokeDoxActions";
import {
  TextField,
  accordionActionsClasses,
  Skeleton,
  skeletonClasses,
  accordionClasses,
  accordionDetailsClasses,
  accordionSummaryClasses,
  Accordion,
  AccordionActions,
  AccordionDetails,
  Typography,
  AccordionSummary,
  Grid,
  List,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDebounce } from "./hooks/useDebounce";
import { PokeDoxData } from "./store/types";
import PokemonsListItem from "./components/PokemonsListItem";
import { Pokemon } from "./intefaces/pokemon";

function App() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");
  const [expanded, setExpanded] = useState<string>("");
  const { data, error, loading } = useSelector((s: pokeDoxState) => s.pokedox);

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const searchQuery = useDebounce(search, 100);

  // console.log("App=>", data, "err-->", error, loading);
  useEffect(() => {
    dispatch(pokeRequest(search));
  }, [searchQuery]);

  const handleChange = (value: string) => {
    setExpanded(value);
  };
  return (
    <>
      <TextField
        name=""
        id=""
        placeholder="Search pokemon..."
        value={search}
        onChange={searchHandler}
        className="search-box"
        style={{}}
      />

      <div className="pokemon-list-container">
        {(loading && (
          <Accordion className="accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Skeleton
                animation="pulse"
                className="mr-5 skeleton"
                height={20}
              />
              <Skeleton animation="pulse" className="skeleton" height={20} />
            </AccordionSummary>
            <AccordionDetails>
              <Skeleton
                animation="pulse"
                className="skeleton"
                width="100%"
                height={50}
              />
            </AccordionDetails>
          </Accordion>
        )) ||
          (error && !loading && <h1>{error}</h1>) || (
            <div className="pokemon-list-container">
              {" "}
              {data?.map((pokemon: Pokemon) => (
                <PokemonsListItem
                  key={pokemon.name}
                  pokemon={pokemon}
                  expanded={expanded}
                  handleChange={handleChange}
                />
              ))}
            </div>
          )}
      </div>
    </>
  );
}

export default App;
