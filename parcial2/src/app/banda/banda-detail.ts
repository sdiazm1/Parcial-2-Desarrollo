import {Banda} from "./banda";

export class BandaDetail extends Banda {

  constructor(id: number,
              name: string,
              foundation_year: number,
              country: string,
              genre: string,
              description: string,
              image: string)
              {
    super(id, name, foundation_year, country, genre,  description, image);
}
}
