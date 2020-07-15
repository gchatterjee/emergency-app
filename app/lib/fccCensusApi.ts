import axios, { AxiosResponse } from 'axios';

interface FccCensusApiResponse {
  input: {
    lat: number;
    lon: number;
  };
  results: FccCensusApiAreaResult[];
}

export interface FccCensusApiAreaResult {
  block_fips: string;
  bbox: number[];
  county_fips: string;
  county_name: string;
  state_fips: string;
  state_code: string;
  state_name: string;
  block_pop_2015: number;
  amt: string;
  bea: string;
  bta: string;
  cma: string;
  eag: string;
  ivm: string;
  mea: string;
  mta: string;
  pea: string;
  rea: string;
  rpc: string;
  vpc: string;
}

export function makeRequest(
  latitude: number,
  longitude: number,
): Promise<AxiosResponse<FccCensusApiResponse>> {
  return axios.get('https://geo.fcc.gov/api/census/area', {
    params: { lat: latitude, lon: longitude },
  });
}
