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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDebounce } from "./hooks/useDebounce";
import { PokeDoxData } from "./store/types";

function App() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");
  const [expanded, setExpanded] = useState<string>("");
  const { data, error, loading } = useSelector((s: pokeDoxState) => s.pokedox);

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const searchQuery = useDebounce(search, 100);

  console.log("App=>", data, "err-->", error, loading);
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
          (error && !loading && <h1>{error}</h1>) ||
          data?.map((v: Pokemon) => (
            <Accordion
              key={v.name}
              className="pokemon-list accordion"
              expanded={expanded === v.name}
              onChange={() => handleChange(v.name)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {v.name}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {v.url}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex">
                  <h4>Abilities: </h4>{" "}
                  <p>{v?.abilities?.map((v) => v.ability?.name).join(" , ")}</p>
                </div>
                <div className="flex">
                  <h4>Moves: </h4>{" "}
                  <p>{v?.moves?.map((v) => v.move?.name).join(" , ")}</p>
                </div>
                <div className="flex">
                  <h4>Species: </h4> <p>{v?.species?.name}</p>
                </div>
                <div className="flex sprites">
                  <h4>Sprites: </h4>
                  {Object.values(v.sprites || {})
                    .filter((v) => typeof v == "string")
                    .map((val: any) => (
                      <img src={val} key={val} className="" alt="image" />
                    ))}
                </div>
                <div className="flex">
                  <h4>Types: </h4>{" "}
                  <p>{v?.types?.map((v) => v?.type?.name).join(" , ")}</p>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    </>
  );
}

export default App;
