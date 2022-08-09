import { AutoComplete } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Option } = AutoComplete;

const styles = {
  searchPage: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "15vh"
  },
  searchBar: {
    width: "50%",
    marginTop: "auto",
    marginBottom: "auto"
  },
  searchBtn: {
    marginLeft: "1%",
    backgroundColor: "#ECB365",
    borderRadius: "6px",
    border: "white dashed 1px",
    fontSize: "x-large"
  }
}

const allTags = ["western", "vegetarian", "vegan", "bland", "mexican", "burger"];

const Search = () => {
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (value) => {
    let res = [];

    if (!value) {
      res = [];
    } else {
      res = allTags.filter((tag) => tag.startsWith(value.toLowerCase()));
    }

    setResult(res);
    setSearchTerm(value);
  };

  const loadResults = (event) => {
    navigate(`/search/${searchTerm.toLowerCase()}`);
  }

  return (
    <>
        <p style={{color: "white"}}>Recipe tag (all lowercase, I.E. 'vegetarian' or 'burger')</p>
        <div style={styles.searchPage} className="contentHolder">
            <AutoComplete
                style={styles.searchBar}
                onChange={handleSearch}
                placeholder="Recipe tag (all lowercase, I.E. 'vegetarian' or 'burger')"
            >
                {result.map((suggestion) => (
                    <Option key={suggestion} value={suggestion}>
                    {suggestion}
                    </Option>
                ))}
            </AutoComplete>
            <button onClick={loadResults} style={styles.searchBtn}>Search</button>
        </div>
    </>
  );
};

export default Search;