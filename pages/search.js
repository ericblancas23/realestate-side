import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";

const Search = ({ Properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <>
      <Box>
        <Flex
          cursor="pointer"
          bg="gray.100"
          borderBottom="1px"
          borderColor="gray.200"
          p="2"
          fontWeight="black"
          fontSize="large"
          justifyContent="center"
          alignItems="center"
          onClick={() => setSearchFilters((prevState) => !prevState)}
        >
          <Text>Search By Filters</Text>
          <Icon paddingLeft="2" w="7" as={BsFilter}></Icon>
        </Flex>
        {searchFilters && <SearchFilters />}
      </Box>
    </>
  );
};

export default Search;
