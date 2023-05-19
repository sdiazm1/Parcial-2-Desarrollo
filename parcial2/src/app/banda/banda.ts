export class Banda {
    id: number;
    name: string;
    foundation_Year: number;
    country: string;
    genre: string;
    description: string;
    image: string;
  
    public constructor(id: number, name: string, foundation_Year: number, country: string, genre: string, description: string, image: string){
      this.id=id;
      this.name=name;
      this.foundation_Year=foundation_Year;
      this.country=country;
      this.genre=genre;
      this.description=description;
      this.image=image;
    }
  
  }