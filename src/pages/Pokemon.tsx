import { useQuery } from "react-query";

import { useNavigate, useParams } from "react-router";
import Layout from "../components/Layout";
import PokemonCard from "../components/PokemonCard";
import { pokemonApi } from "../api";

import { useFindPokemon } from "../hooks/useFindPokemon";

const Pokemon: React.FC<{}> = () => {
  const navigate = useNavigate();

  const { pokemon: pokemonName } = useParams();

  const pokemon = useFindPokemon(pokemonName);
  const goBack = () => navigate(-1);

  if (pokemon.isLoading) {
    return <div>loading</div>;
  }
  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-0">
        {pokemon.data && (
          <div className="max-w-md mx-auto space-y-6">
            <PokemonCard name={pokemon.data.data.name} showStats />

            <div
              role="button"
              className="block text-lg  text-gray-400"
              onClick={goBack}
            >
              Back
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Pokemon;
