/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { Selling } from "../interfaces/selling.interface";
import axios from "axios";
const url = "http://localhost:5000/v1/droids?";

export const useProduct = (props: { name?: string }): Selling[] => {
  const { name } = props;
  const [product, setProduct] = useState<Selling[]>([]);
  let finalURL = url;
  if (name) finalURL = `${finalURL}name=${name}`;

  useEffect(() => {
    axios
      .get(finalURL)
      .then((response: any) => {
        const result: Selling[] = response.data;
        setProduct(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);
  return product;
};
