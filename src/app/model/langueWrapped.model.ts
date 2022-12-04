import { Langue } from "./langue.model";
export class LangueWrapper {
    _embedded!: { langues: Langue[]};
}