/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { Selling } from "../interfaces/selling.interface";
import axios from "axios";
const url = "https://dbay-api-server.onrender.com/v1/droids";

export type UrlParams = {
  name?: string;
  status?: "New" | "Used" ;
  category?:
    | "Interrogation"
    | "Pilot"
    | "Scout"
    | "Astromech"
    | "Battle"
    | "Assassin"
    | "Protocol"
    | "Torture"
};

export const useProduct = (props: UrlParams): Selling[] => {
  const [product, setProduct] = useState<Selling[]>([]);

  useEffect(() => {
    let finalURL = url,
      char = "?";
    if (props.name) {
      finalURL = `${finalURL}${char}name=${props.name}`;
      char = "&";
    }
    if (props.status) {
      finalURL = `${finalURL}${char}status=${props.status}`;
      if (char === "?") char = "&";
    }
    if (props.category) {
      finalURL = `${finalURL}${char}category=${props.category}`;
      if (char === "?") char = "&";
    }

    axios
      .get(finalURL)
      .then((response: any) => {
        const result: Selling[] = response.data;
        setProduct(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.name,props.status,props.category]);
  return product;
};
